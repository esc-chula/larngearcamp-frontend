import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react"
import { getLocalStorage, setLocalStorage, removeLocalStorage } from "../../utils/storage"
import jwt_decode from "jwt-decode"
import LoginModel from "../models/login.model"
import ForgotPasswordModel from "../models/forgotPassword.model"
import useSWR, { responseInterface } from "swr"
import { ShowLoadingComponent } from "../components/loading.component"
import ResetPasswordModel from "../models/resetPassword.model"
import MeDTO from "../models/dto/me.dto"
import { httpClient } from "../../utils/http"
import { AxiosRequestConfig } from "axios"
import AuthServiceAPI from "../services/auth.service"

interface AuthConstruct {
  userId: string | null
  setAccessToken: React.Dispatch<any>
  isLoggedIn: boolean
  isUserLoggedIn: boolean
  isAdminLoggedIn: boolean
  login: (params: LoginModel) => Promise<void>
  loginFb: (facebookAccessToken: string) => Promise<void>
  logout: () => Promise<void>
  me: responseInterface<MeDTO, Error>
  forgotPassword: (email: ForgotPasswordModel) => Promise<void>
  resetPassword: (params: ResetPasswordModel) => Promise<void>
}

interface AccessTokenPayload {
  iss: string
  sub: string
  userId: string
  role: string
  exp: number
  iat: number
}

interface AccessTokenState {
  currentToken: {
    jwt: string
    payload: AccessTokenPayload
  } | null
  getAccessTokenPromise: Promise<string | null> | null
}

function initAccessTokenState(accessToken: string, accessTokenState: AccessTokenState) {
  if (accessToken) {
    accessTokenState.currentToken = {
      jwt: accessToken,
      payload: jwt_decode(accessToken)
    }
  } else {
    accessTokenState.currentToken = null
  }
}

export const AuthContext = createContext({} as AuthConstruct)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider: React.FC = ({ ...other }) => {
  const [_accessToken, setStateAccessToken] = useState(() => getLocalStorage("ACCESS_TOKEN"))
  const accessTokenStateRef = useRef<AccessTokenState>((null as unknown) as AccessTokenState)

  if (accessTokenStateRef.current === null) {
    accessTokenStateRef.current = {
      currentToken: null,
      getAccessTokenPromise: null
    }
    initAccessTokenState(_accessToken, accessTokenStateRef.current)
  }

  const accessTokenPayload = accessTokenStateRef.current.currentToken?.payload
  const isUserLoggedIn = accessTokenPayload?.role === "user"
  const isAdminLoggedIn = accessTokenPayload?.role === "admin"
  const userId = accessTokenPayload?.userId || null

  const setAccessToken = useCallback(newAccessToken => {
    initAccessTokenState(newAccessToken, accessTokenStateRef.current)
    setStateAccessToken(newAccessToken)
    if (newAccessToken !== null) {
      setLocalStorage("ACCESS_TOKEN", newAccessToken)
    } else {
      removeLocalStorage("ACCESS_TOKEN")
    }
  }, [])

  const isLoggedIn = !!accessTokenPayload

  const login = useCallback(
    async (params: LoginModel) => {
      const result = await AuthServiceAPI.loginAPI(params)
      const accessToken = result.data.token
      setAccessToken(accessToken)
    },
    [setAccessToken]
  )

  const loginFb = useCallback(
    async (signedRequest: string) => {
      const result = await AuthServiceAPI.loginFbAPI(signedRequest)
      const accessToken = result.data.token
      setAccessToken(accessToken)
    },
    [setAccessToken]
  )

  const logout = useCallback(async () => {
    const { currentToken } = accessTokenStateRef.current
    if (currentToken === null) {
      return
    }
    try {
      await AuthServiceAPI.logoutAPI(currentToken.jwt)
    } catch (error) {}
    setAccessToken(null)
  }, [setAccessToken])

  // returns current token or refresh and returns a new one
  const getAccessTokenImpl: () => Promise<string | null> = useCallback(async () => {
    const { currentToken } = accessTokenStateRef.current
    if (!currentToken) {
      return null
    }

    const { exp } = currentToken.payload

    const expireTime = new Date(exp * 1000)
    const currentTime = new Date()
    if (currentTime > expireTime) {
      process.env.REACT_APP_DEBUG && console.log("Token Expired, trying to refresh")
      try {
        const result = await AuthServiceAPI.refreshAPI(currentToken.jwt)
        const newAccessToken = result.data.token
        setAccessToken(newAccessToken)
        return newAccessToken
      } catch (error) {
        if (error?.response?.status === 401) {
          logout()
          return null
        }
        // maybe connection is down? let's return the old token
        return currentToken.jwt
      }
    } else {
      return currentToken.jwt
    }
  }, [logout, setAccessToken])

  // ensure getAccessTokenImpl can't be called in parallel
  const getAccessToken: () => Promise<string | null> = useCallback(async () => {
    const accessTokenState = accessTokenStateRef.current
    if (accessTokenState.getAccessTokenPromise) {
      return await accessTokenState.getAccessTokenPromise
    } else {
      const promise = getAccessTokenImpl()
      accessTokenState.getAccessTokenPromise = promise
      try {
        return await promise
      } finally {
        accessTokenState.getAccessTokenPromise = null
      }
    }
  }, [getAccessTokenImpl])

  // add access token to all requests through httpClient
  useEffect(() => {
    const id = httpClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
      const accessToken = await getAccessToken()
      config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ""
      return config
    })
    return () => httpClient.interceptors.request.eject(id)
  }, [getAccessToken])

  const meFetcher = useCallback(async () => {
    try {
      return (await AuthServiceAPI.meAPI(await getAccessToken())).data
    } catch (error) {
      if (error?.response?.status === 401) {
        // token not expired yet but invalid
        logout()
      }
      throw error
    }
  }, [getAccessToken, logout])

  const me = useSWR(userId ? `me (${userId})` : null, meFetcher, {
    refreshInterval: 0,
    revalidateOnFocus: process.env.NODE_ENV === "production"
  })

  const forgotPassword = useCallback(async (params: ForgotPasswordModel) => {
    await AuthServiceAPI.forgotPasswordAPI(params)
  }, [])
  const resetPassword = useCallback(async (params: ResetPasswordModel) => {
    await AuthServiceAPI.resetPasswordAPI(params)
  }, [])

  useEffect(() => {
    const id = httpClient.interceptors.response.use(undefined, error => {
      if (error?.response?.status === 401) {
        setAccessToken(null)
      } else {
        return Promise.reject(error)
      }
    })
    return () => httpClient.interceptors.response.eject(id)
  }, [setAccessToken])

  const value: AuthConstruct = {
    userId,
    setAccessToken,
    isLoggedIn,
    isUserLoggedIn,
    isAdminLoggedIn,
    login,
    loginFb,
    logout,
    me,
    forgotPassword,
    resetPassword
  }

  if (isLoggedIn && !me.data) {
    return <ShowLoadingComponent />
  }

  return <AuthContext.Provider value={value} {...other} />
}
