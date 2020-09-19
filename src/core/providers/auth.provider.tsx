import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { getLocalStorage } from "../../utils/storage"
import jwt_decode from "jwt-decode"
import AuthService from "../services/auth.service"
import LoginModel from "../models/login.model"
import moment from "moment"
import { AxiosResponse } from "axios"

interface AuthConstruct {
  accessToken: string | null
  setAccessToken: React.Dispatch<any>
  isLoggedIn: boolean
  isUserLoggedIn: boolean
  isAdminLoggedIn: boolean
  refresh: () => Promise<Boolean>
  login: (params: LoginModel) => Promise<AxiosResponse<any>>
  logout: () => Promise<AxiosResponse<any>>
  me: () => Promise<AxiosResponse<any>>
  forgetPassword: () => Promise<AxiosResponse<any>>
  resetPassword: (params: { password: string }) => Promise<AxiosResponse<any>>
}

export const AuthContext = createContext({} as AuthConstruct)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ ...other }) => {
  const [accessToken, setAccessToken] = useState(getLocalStorage("ACCESS_TOKEN"))
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
    }
    return result
  }, [])

  const logout = useCallback(async () => {
    const result = await AuthService.logout()
    setAccessToken(null)
    return result
  }, [])

  const me = useCallback(async () => {
    const result = await AuthService.me()
    return result
  }, [])

  const refresh = useCallback(async (): Promise<Boolean> => {
    if (accessToken) {
      const { exp } = jwt_decode(accessToken)
      if (moment().isAfter(moment(exp * 1000).add("3", "d"))) {
        await AuthService.logout()
        process.env.REACT_APP_DEBUG && console.log("Token Expired, logged out (inactive in 3 days)")
        setAccessToken(null)
        return true
      } else if (moment().isAfter(moment(exp * 1000))) {
        const result = await AuthService.refresh()
        process.env.REACT_APP_DEBUG && console.log("Token Expired, refresh (active in 3 days)")
        if (result.status === 200) {
          setAccessToken(result.data.token)
        }
        return true
      }
    }
    return false
  }, [accessToken])

  const forgetPassword = useCallback(async () => {
    const result = await AuthService.forgetPassword()
    return result
  }, [])

  const resetPassword = useCallback(async (params: { password: string }) => {
    const result = await AuthService.resetPassword(params)
    return result
  }, [])

  useEffect(() => {
    refresh().then(result => process.env.REACT_APP_DEBUG && console.log("refresh: ", result))
  }, [accessToken, refresh])

  const value: AuthConstruct = {
    accessToken,
    setAccessToken,
    isLoggedIn,
    isUserLoggedIn,
    isAdminLoggedIn,
    refresh,
    login,
    logout,
    me,
    forgetPassword,
    resetPassword
  }

  return <AuthContext.Provider value={value} {...other} />
}
