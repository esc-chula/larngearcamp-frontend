import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { getLocalStorage, setLocalStorage, removeLocalStorage } from "../../utils/storage"
import jwt_decode from "jwt-decode"
import AuthService from "../services/auth.service"
import LoginModel from "../models/login.model"
import { AxiosResponse } from "axios"
import ForgotPasswordModel from "../models/forgotPassword.model"
import useSWR, { responseInterface } from "swr"
import { LoadingComponent } from "../components/loading.component"
import ResetPasswordModel from "../models/resetPassword.model"

interface AuthConstruct {
  accessToken: string | null
  setAccessToken: React.Dispatch<any>
  isLoggedIn: boolean
  isUserLoggedIn: boolean
  isAdminLoggedIn: boolean
  refresh: () => Promise<Boolean>
  login: (params: LoginModel) => Promise<AxiosResponse<any>>
  loginFb: (facebookAccessToken: string) => Promise<AxiosResponse<any>>
  logout: () => Promise<AxiosResponse<any>>
  me: responseInterface<any, Error>
  forgotPassword: (email: ForgotPasswordModel) => Promise<AxiosResponse<any>>
  resetPassword: (params: ResetPasswordModel) => Promise<AxiosResponse<any>>
}

export const AuthContext = createContext({} as AuthConstruct)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ ...other }) => {
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

  const login = useCallback(async (params: LoginModel) => {
    const result = await AuthService.login(params)
    if (result.status === 200) {
      setAccessToken(result.data.token)
      setLocalStorage("ACCESS_TOKEN", result.data.token)
    }
    return result
  }, [])

  const loginFb = useCallback(async (accessToken: string) => {
    const result = await AuthService.loginFb(accessToken)
    if (result.status === 200) {
      setAccessToken(result.data.token)
      setLocalStorage("ACCESS_TOKEN", result.data.token)
    }
    return result
  }, [])

  const logout = useCallback(async () => {
    const result = await AuthService.logout()
    setAccessToken(null)
    removeLocalStorage("ACCESS_TOKEN")
    return result
  }, [])

  const me = useSWR(
    () => (accessToken ? `me (${accessToken})` : null),
    async () => (await AuthService.me()).data,
    {
      refreshInterval: 0,
      revalidateOnFocus: process.env.NODE_ENV === "production"
    }
  )

  const refresh = useCallback(async (): Promise<Boolean> => {
    if (accessToken) {
      const { exp } = jwt_decode(accessToken)
      const currentTime = new Date()
      const expireTime = new Date(exp * 1000)
      const expireTimeNext3Day = new Date(exp * 1000 + 1000 * 60 * 60 * 24 * 3)
      if (currentTime > expireTimeNext3Day) {
        await AuthService.logout()
        process.env.REACT_APP_DEBUG && console.log("Token Expired, logged out (inactive in 3 days)")
        setAccessToken(null)
        removeLocalStorage("ACCESS_TOKEN")
        return true
      } else if (currentTime > expireTime) {
        const result = await AuthService.refresh()
        process.env.REACT_APP_DEBUG && console.log("Token Expired, refresh (active in 3 days)")
        if (result.status === 200) {
          setAccessToken(result.data.token)
          setLocalStorage("ACCESS_TOKEN", result.data.token)
        }
        return true
      }
    }
    return false
  }, [accessToken])

  const forgotPassword = useCallback(async (params: ForgotPasswordModel) => {
    const result = await AuthService.forgotPassword(params)
    return result
  }, [])

  const resetPassword = useCallback(async (params: ResetPasswordModel) => {
    const result = await AuthService.resetPassword(params)
    return result
  }, [])

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
