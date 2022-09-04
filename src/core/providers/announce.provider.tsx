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
    end: new Date("September 12, 2022 18:00:00 GMT+07:00")
  },
  {
    state: ApplicationStatus.APPLICABLE,
    start: new Date("September 12, 2022 18:00:00 GMT+07:00"),
    end: new Date("October 8, 2022 00:30:00 GMT+07:00")
  },
  {
    state: ApplicationStatus.DOCUMENT_EDIT,
    start: new Date("October 8, 2022 00:30:01 GMT+07:00"),
    end: new Date("October 15, 2022 00:30:00 GMT+07:00")
  },
  {
    state: ApplicationStatus.LATE,
    start: new Date("October 15, 2022 00:30:01 GMT+07:00"),
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
