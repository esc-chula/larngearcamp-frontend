import React, { createContext, useContext } from "react"
import ApplicationServiceAPI from "../services/application.service"
import { DocumentStateDetail } from "../models/dto/application.dto"

interface ApplicationConstruct {
  createApplication: () => Promise<void>
  uploadDocument: (data: FormData) => Promise<DocumentStateDetail>
}

export const ApplicationContext = createContext({} as ApplicationConstruct)

export const useApplicationContext = () => useContext(ApplicationContext)
export const ApplicationProvider: React.FC = ({ ...other }) => {
  const createApplication = ApplicationServiceAPI.createApplicationAPI
  const uploadDocument = ApplicationServiceAPI.uploadDocumentAPI

  const value = { createApplication, uploadDocument }
  return <ApplicationContext.Provider value={value} {...other} />
}
