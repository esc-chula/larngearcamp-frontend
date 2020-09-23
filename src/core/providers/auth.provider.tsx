import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { getLocalStorage, setLocalStorage, removeLocalStorage } from "../../utils/storage"
import jwt_decode from "jwt-decode"
import LoginModel from "../models/login.model"
import ForgotPasswordModel from "../models/forgotPassword.model"
import useSWR, { responseInterface } from "swr"
import { LoadingComponent } from "../components/loading.component"
import ResetPasswordModel from "../models/resetPassword.model"
import { useAuthServiceContext } from "../services/auth.service"
import MeModel from "../models/me.model"

interface AuthConstruct {
  accessToken: string | null
  setAccessToken: React.Dispatch<any>
  isLoggedIn: boolean
  isUserLoggedIn: boolean
  isAdminLoggedIn: boolean
  refresh: () => Promise<Boolean>
  login: (params: LoginModel) => Promise<void>
  loginFb: (facebookAccessToken: string) => Promise<void>
  logout: () => Promise<void>
  me: responseInterface<MeModel, Error>
  forgotPassword: (email: ForgotPasswordModel) => Promise<void>
  resetPassword: (params: ResetPasswordModel) => Promise<void>
}

export const AuthContext = createContext({} as AuthConstruct)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider: React.FC = ({ ...other }) => {
  const { loginAPI, loginFbAPI, meAPI, logoutAPI, refreshAPI, forgotPasswordAPI, resetPasswordAPI } = useAuthServiceContext()
  const [accessToken, setAccessToken] = useState(() => getLocalStorage("ACCESS_TOKEN"))
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

  const refresh = useCallback(async (): Promise<Boolean> => {
    if (accessToken) {
      const { exp } = jwt_decode(accessToken)
      const currentTime = new Date()
      const expireTime = new Date(exp * 1000)
      const expireTimeNext3Day = new Date(exp * 1000 + 1000 * 60 * 60 * 24 * 3)
      if (currentTime > expireTimeNext3Day) {
        try {
          await logoutAPI()
          process.env.REACT_APP_DEBUG && console.log("Token Expired, logged out (inactive in 3 days)")
          setAccessToken(null)
          removeLocalStorage("ACCESS_TOKEN")
        } catch (error) {}
        return true
      } else if (currentTime > expireTime) {
        try {
          const result = await refreshAPI()
          process.env.REACT_APP_DEBUG && console.log("Token Expired, refresh (active in 3 days)")
          setAccessToken(result.data.token)
          setLocalStorage("ACCESS_TOKEN", result.data.token)
        } catch (error) {}
        return true
      }
    }
    return false
  }, [accessToken, logoutAPI, refreshAPI])

  const login = useCallback(
    async (params: LoginModel) => {
      try {
        const result = await loginAPI(params)
        setAccessToken(result.data.token)
        setLocalStorage("ACCESS_TOKEN", result.data.token)
      } catch (error) {}
    },
    [loginAPI]
  )

  const loginFb = useCallback(
    async (accessToken: string) => {
      try {
        const result = await loginFbAPI(accessToken)
        setAccessToken(result.data.token)
        setLocalStorage("ACCESS_TOKEN", result.data.token)
      } catch (error) {}
    },
    [loginFbAPI]
  )

  const logout = useCallback(async () => {
    try {
      await refresh()
      await logoutAPI()
      setAccessToken(null)
      removeLocalStorage("ACCESS_TOKEN")
    } catch (error) {}
  }, [refresh, logoutAPI])

  const me = useSWR(
    () => (accessToken ? `me (${accessToken})` : null),
    async () => {
      await refresh()
      return (await meAPI()).data
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: process.env.NODE_ENV === "production"
    }
  )

  const forgotPassword = useCallback(
    async (params: ForgotPasswordModel) => {
      await forgotPasswordAPI(params)
    },
    [forgotPasswordAPI]
  )
  const resetPassword = useCallback(
    async (params: ResetPasswordModel) => {
      await resetPasswordAPI(params)
    },
    [resetPasswordAPI]
  )

  useEffect(() => {
    refresh()
  }, [accessToken, refresh])

  const value: AuthConstruct = {
    accessToken,
    setAccessToken,
    isLoggedIn,
    isUserLoggedIn,
    isAdminLoggedIn,
    refresh,
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
