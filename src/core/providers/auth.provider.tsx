import React, { createContext, useContext } from "react"
import { getLocalStorage } from "../../utils/storage"

type AuthContextProps = {
  isUserLogin: () => boolean
  isAdminLogin: () => boolean
}

export const AuthContext = createContext<AuthContextProps>({
  isUserLogin: () => {
    return Boolean(getLocalStorage("ACCESS_TOKEN"))
  },
  isAdminLogin: () => {
    return Boolean(getLocalStorage("ACCESS_TOKEN"))
  }
})

export const AuthProvider: React.FC = ({ ...other }) => {
  const isUserLogin = () => {
    return Boolean(getLocalStorage("ACCESS_TOKEN"))
  }
  const isAdminLogin = () => {
    return Boolean(getLocalStorage("ACCESS_TOKEN"))
  }

  const value = { isUserLogin, isAdminLogin }
  return <AuthContext.Provider value={value} {...other} />
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
