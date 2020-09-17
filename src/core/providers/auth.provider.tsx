import React, { createContext, useContext, useState, useMemo, useCallback } from "react"
import { getLocalStorage } from "../../utils/storage"
import jwt_decode from "jwt-decode"
import AuthService from "../services/auth.service"

interface AuthConstruct {
  accessToken: string | null
  setAccessToken: React.Dispatch<any>
  isLoggedIn: boolean
  isUserLoggedIn: boolean
  isAdminLoggedIn: boolean
  refreshWhenTokenExpired: () => void
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
  const isLoggedIn = useMemo(() => {
    return Boolean(accessToken)
  }, [accessToken])

  const refreshWhenTokenExpired = useCallback(() => {
    const { exp } = jwt_decode(accessToken)
    const now = new Date()
    if (now < exp) {
      const refresh = async () => {
        const result = await AuthService.refresh()
        return result.data.token
      }
      setAccessToken(refresh())
    }
  }, [accessToken])

  const value: AuthConstruct = {
    accessToken,
    setAccessToken,
    isLoggedIn,
    isUserLoggedIn,
    isAdminLoggedIn,
    refreshWhenTokenExpired
  }

  return <AuthContext.Provider value={value} {...other} />
}
