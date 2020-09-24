import React, { createContext, useContext, useState, useMemo, useCallback, useEffect, useRef } from "react"
import { getLocalStorage, setLocalStorage, removeLocalStorage } from "../../utils/storage"
import jwt_decode from "jwt-decode"
import LoginModel from "../models/login.model"
import ForgotPasswordModel from "../models/forgotPassword.model"
import useSWR, { responseInterface } from "swr"
import { LoadingComponent } from "../components/loading.component"
import ResetPasswordModel from "../models/resetPassword.model"
import MeDTO from "../models/dto/me.dto"
import { httpClient } from "../../utils/http"
import { AxiosRequestConfig } from "axios"
import AuthServiceAPI from "../services/auth.service"

interface AuthConstruct {
  accessToken: string | null
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

interface AccessTokenState {
  accessToken: string | null
  exp: number
  getAccessTokenPromise: Promise<string | null> | null
}

function initAccessTokenState(accessToken: string, accessTokenState: AccessTokenState) {
  if (accessToken) {
    const { exp } = jwt_decode(accessToken)
    accessTokenState.accessToken = accessToken
    accessTokenState.exp = exp
  } else {
    accessTokenState.accessToken = null
    accessTokenState.exp = 0
  }
}

export const AuthContext = createContext({} as AuthConstruct)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider: React.FC = ({ ...other }) => {
  const [accessToken, setStateAccessToken] = useState(() => getLocalStorage("ACCESS_TOKEN"))
  const accessTokenStateRef = useRef<AccessTokenState>((null as unknown) as AccessTokenState)

  const setAccessToken = useCallback(newAccessToken => {
    initAccessTokenState(newAccessToken, accessTokenStateRef.current)
    setStateAccessToken(newAccessToken)
    if (newAccessToken !== null) {
      setLocalStorage("ACCESS_TOKEN", newAccessToken)
    } else {
      removeLocalStorage("ACCESS_TOKEN")
    }
  }, [])

  if (accessTokenStateRef.current === null) {
    accessTokenStateRef.current = {
      accessToken: null,
      exp: 0,
      getAccessTokenPromise: null
    }
    initAccessTokenState(accessToken, accessTokenStateRef.current)
  }

  useEffect(() => {
    initAccessTokenState(accessToken, accessTokenStateRef.current)
  }, [accessToken])

  const isUserLoggedIn = useMemo(() => {
    if (accessToken) {
      const { role } = jwt_decode(accessToken)
      return role === "user"
    }
    return false
  }, [accessToken])

  const isAdminLoggedIn = useMemo(() => {
    if (accessToken) {
      const { role } = jwt_decode(accessToken)
      return role === "admin"
    }
    return false
  }, [accessToken])

  const isLoggedIn = useMemo(() => Boolean(accessToken), [accessToken])

  const login = useCallback(
    async (params: LoginModel) => {
      try {
        const result = await AuthServiceAPI.loginAPI(params)
        const accessToken = result.data.token
        setAccessToken(accessToken)
      } catch (error) {}
    },
    [setAccessToken]
  )

  const loginFb = useCallback(
    async (signedRequest: string) => {
      try {
        const result = await AuthServiceAPI.loginFbAPI(signedRequest)
        const accessToken = result.data.token
        setAccessToken(accessToken)
      } catch (error) {}
    },
    [setAccessToken]
  )

  const logout = useCallback(async () => {
    const { accessToken } = accessTokenStateRef.current
    if (accessToken === null) {
      return
    }
    try {
      await AuthServiceAPI.logoutAPI(accessToken)
    } catch (error) {}
    setAccessToken(null)
  }, [setAccessToken])

  // returns current token or refresh and returns a new one
  const getAccessTokenImpl: () => Promise<string | null> = useCallback(async () => {
    const { accessToken, exp } = accessTokenStateRef.current
    if (!accessToken) {
      return null
    }

    const expireTime = new Date(exp * 1000)
    const currentTime = new Date()
    if (currentTime > expireTime) {
      process.env.REACT_APP_DEBUG && console.log("Token Expired, trying to refresh")
      try {
        const result = await AuthServiceAPI.refreshAPI(accessToken)
        const newAccessToken = result.data.token
        setAccessToken(newAccessToken)
        return newAccessToken
      } catch (error) {
        if (error?.response?.status === 401) {
          logout()
          return null
        }
        // maybe connection is down? let's return the old token
        return accessToken
      }
    } else {
      return accessToken
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

  const me = useSWR(() => (accessToken ? `me (${accessToken})` : null), meFetcher, {
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
    accessToken,
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

  if (accessToken && !me.data) {
    return <LoadingComponent loading={true} />
  }

  return <AuthContext.Provider value={value} {...other} />
}
