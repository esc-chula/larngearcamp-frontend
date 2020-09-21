import React, { createContext, useContext } from "react"

interface ApplicationConstruct {}

export const ApplicationContext = createContext({} as ApplicationConstruct)

export const useApplicationContext = () => {
  return useContext(ApplicationContext)
}

export const ApplicationProvider: React.FC = ({ ...other }) => {
  const value = {}
  return <ApplicationContext.Provider value={value} {...other} />
}
