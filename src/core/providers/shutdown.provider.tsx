import React, { createContext, useContext } from "react"

interface ApplicationConstruct {
  shutdownDate: Date
}

export const ShutdownContext = createContext({} as ApplicationConstruct)

export const useShutdownContext = () => useContext(ShutdownContext)

export const ShutdownProvider: React.FC = ({ ...other }) => {
  const shutdownDate = new Date("October 21, 2020 00:00:00 GMT+07:00")
  const value = { shutdownDate }
  return <ShutdownContext.Provider value={value} {...other} />
}
