import React, { createContext, useContext } from "react"

export enum ApplicationStatus {
  EARLY,
  APPLICABLE,
  DOCUMENT_EDIT,
  LATE
}

interface AnnounceConstruct {
  state: ApplicationStatus
}

const SCHEDULE = [
  {
    state: ApplicationStatus.EARLY,
    start: null,
    end: new Date("November 15, 2021 10:00:00 GMT+07:00")
  },
  {
    state: ApplicationStatus.APPLICABLE,
    start: new Date("November 15, 2021 10:00:00 GMT+07:00"),
    end: new Date("December 16, 2021 00:30:00 GMT+07:00")
  },
  {
    state: ApplicationStatus.DOCUMENT_EDIT,
    start: new Date("December 16, 2021 00:30:01 GMT+07:00"),
    end: new Date("December 25, 2021 00:30:00 GMT+07:00")
  },
  {
    state: ApplicationStatus.LATE,
    start: new Date("December 25, 2021 00:30:01 GMT+07:00"),
    end: null
  }
]

export const AnnounceContext = createContext({} as AnnounceConstruct)

export const useAnnounceContext = () => useContext(AnnounceContext)

export const AnnounceProvider: React.FC = ({ ...other }) => {
  const isDev = process.env.REACT_APP_ENVIRONMENT === "development"
  const nowDate = new Date()

  // Schedule time
  let state = SCHEDULE.reduce((prev, cur) => {
    const startValid = !!cur.start ? cur.start <= nowDate : true
    const endValid = !!cur.end ? cur.end >= nowDate : true
    return startValid && endValid ? cur.state : prev
  }, ApplicationStatus.LATE)

  if (isDev) state = ApplicationStatus.APPLICABLE

  const value = { state }
  return <AnnounceContext.Provider value={value} {...other} />
}
