import React, { createContext, useContext } from "react"

interface AnnounceConstruct {
  isApplicable: boolean
  isLate: boolean
  isEarly: boolean
}

export const AnnounceContext = createContext({} as AnnounceConstruct)

export const useAnnounceContext = () => useContext(AnnounceContext)

export const AnnounceProvider: React.FC = ({ ...other }) => {
  const registerCloseDate = new Date("December 8, 2021 23:59:59 GMT+07:00")
  const applicationStartDate = new Date("November 15, 2021 10:00:00 GMT+07:00")
  const isLate = new Date() > registerCloseDate
  const isEarly = new Date() < applicationStartDate
  const isApplicable = !isEarly && !isLate

  const value = { isEarly, isLate, isApplicable }
  return <AnnounceContext.Provider value={value} {...other} />
}
