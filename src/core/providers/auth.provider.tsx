import React, { createContext, useContext, useCallback } from "react"
import { getLocalStorage } from "../../utils/storage"

type AuthContextProps = {
  isUserLogin: () => boolean
  isAdminLogin: () => boolean
}

export const AuthContext = createContext<AuthContextProps>({
  isUserLogin: useCallback(() => {
    return Boolean(getLocalStorage("ACCESS_TOKEN"))
  }, []),
  isAdminLogin: useCallback(() => {
    return Boolean(getLocalStorage("ACCESS_TOKEN"))
  }, [])
})

export const AuthProvider: React.FC = ({ ...other }) => {
  const isUserLogin = useCallback(() => {
    return Boolean(getLocalStorage("ACCESS_TOKEN"))
  }, [])
  const isAdminLogin = useCallback(() => {
    return Boolean(getLocalStorage("ACCESS_TOKEN"))
  }, [])

  const value = { isUserLogin, isAdminLogin }
  return <AuthContext.Provider value={value} {...other} />
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
