import React, { createContext, useContext, useState, useMemo } from "react"
import { getLocalStorage } from "../../utils/storage"

interface AuthConstruct {
  accessToken: string | null
  setAccessToken: React.Dispatch<any>
  isLoggedIn: boolean
  isUserLoggedIn: boolean
  isAdminLoggedIn: boolean
}

export const AuthContext = createContext({} as AuthConstruct)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ ...other }) => {
  const [accessToken, setAccessToken] = useState(getLocalStorage("ACCESS_TOKEN"))
  const isUserLoggedIn = useMemo(() => {
    return Boolean(accessToken)
  }, [accessToken])
  const isAdminLoggedIn = useMemo(() => {
    return Boolean(accessToken)
  }, [accessToken])
  const isLoggedIn = useMemo(() => {
    return Boolean(accessToken)
  }, [accessToken])

  const value: AuthConstruct = {
    accessToken,
    setAccessToken,
    isLoggedIn,
    isUserLoggedIn,
    isAdminLoggedIn
  }

  return <AuthContext.Provider value={value} {...other} />
}
