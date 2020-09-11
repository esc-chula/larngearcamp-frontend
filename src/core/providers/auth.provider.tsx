import React, { createContext, useContext, useState, useEffect, useMemo } from "react"
import { getLocalStorage } from "../../utils/storage"

interface AuthContruct {
  accessToken: string | null
  isLoggedIn: boolean
  isUserLoggedIn: boolean
  isAdminLoggedIn: boolean
}

export const AuthContext = createContext({} as AuthContruct)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ ...other }) => {
  const [accessToken, setAccessToken] = useState(null)
  const isUserLoggedIn = useMemo(() => {
    return Boolean(accessToken)
  }, [accessToken])
  const isAdminLoggedIn = useMemo(() => {
    return Boolean(accessToken)
  }, [accessToken])
  const isLoggedIn = useMemo(() => {
    return Boolean(accessToken)
  }, [accessToken])

  useEffect(() => {
    setAccessToken(JSON.parse(getLocalStorage("ACCESS_TOKEN")))
  }, [])

  const value: AuthContruct = {
    accessToken,
    isLoggedIn,
    isUserLoggedIn,
    isAdminLoggedIn
  }

  return <AuthContext.Provider value={value} {...other} />
}
