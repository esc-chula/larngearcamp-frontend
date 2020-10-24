import React, { createContext, useContext } from "react"

interface AnnounceConstruct {
  announceDate: Date
}

export const AnnounceContext = createContext({} as AnnounceConstruct)

export const useAnnounceContext = () => useContext(AnnounceContext)

export const AnnounceProvider: React.FC = ({ ...other }) => {
  const announceDate = new Date("October 24, 2020 18:00:00 GMT+07:00")
  const value = { announceDate }
  return <AnnounceContext.Provider value={value} {...other} />
}
