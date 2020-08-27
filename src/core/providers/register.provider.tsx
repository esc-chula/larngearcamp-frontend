import React, { createContext, useContext, useState, useCallback } from "react"
import { UserDataInterface } from "../models/userData"

export const RegisterContext = createContext({})

export const RegisterProvider: React.FC = ({ children, ...other }) => {
  const [userData, setUserData] = useState<UserDataInterface | null>(null)

  const value = { userData }
  return <RegisterContext.Provider value={value} children={children} {...other} />
}

export const useRegisterContext = () => {
  return useContext(RegisterContext)
}
