import React, { createContext, useContext } from "react"

interface AnnounceConstruct {
  announceDate: Date
  applicationStartDate: Date
}

export const AnnounceContext = createContext({} as AnnounceConstruct)

export const useAnnounceContext = () => useContext(AnnounceContext)

export const AnnounceProvider: React.FC = ({ ...other }) => {
  const announceDate = new Date("December 8, 2021 18:00:00 GMT+07:00")
  const applicationStartDate = new Date("November 15, 2021 10:00:00 GMT+07:00")
  const value = { announceDate, applicationStartDate }
  return <AnnounceContext.Provider value={value} {...other} />
}
