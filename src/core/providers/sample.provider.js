import React, { createContext, useContext } from "react"

export const SampleContext = createContext({})

export const SampleProvider = ({ children, ...other }) => {
  const value = {}
  return <SampleContext.Provider value={value} children={children} {...other} />
}

export const useSampleContext = () => {
  return useContext(SampleContext)
}
