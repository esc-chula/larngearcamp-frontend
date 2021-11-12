import React, { createContext, useContext } from "react"

interface AnnounceConstruct {
  isApplicable: boolean
  isLate: boolean
  isEarly: boolean
}

export const AnnounceContext = createContext({} as AnnounceConstruct)

export const useAnnounceContext = () => useContext(AnnounceContext)

export const AnnounceProvider: React.FC = ({ ...other }) => {
  const isDev = process.env.REACT_APP_ENVIRONMENT === "development"
  const registerCloseDate = new Date("December 9, 2021 00:00:00 GMT+07:00")
  const applicationStartDate = new Date("November 15, 2021 10:00:00 GMT+07:00")
  const isLate = new Date() >= registerCloseDate && !isDev
  const isEarly = new Date() < applicationStartDate && !isDev
  const isApplicable = (!isEarly && !isLate) || isDev

  const value = { isEarly, isLate, isApplicable }
  return <AnnounceContext.Provider value={value} {...other} />
}
