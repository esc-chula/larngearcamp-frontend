import React, { createContext, useContext } from "react"

export const RegisterContext = createContext({})

export const RegisterProvider: React.FC = ({ children, ...other }) => {
  const value = {}
  return <RegisterContext.Provider value={value} children={children} {...other} />
}

export const useRegisterContext = () => {
  return useContext(RegisterContext)
}
