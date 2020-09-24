import React, { createContext, useContext } from "react"
import DocumentType from "../models/documentType.constant"
import ApplicationServiceAPI from "../services/application.service"
import FileDTO from "../models/dto/file.dto"

interface ApplicationConstruct {
  createApplication: () => Promise<void>
  uploadDocument: (data: FormData, type: DocumentType) => Promise<FileDTO>
}

export const ApplicationContext = createContext({} as ApplicationConstruct)

export const useApplicationContext = () => useContext(ApplicationContext)
export const ApplicationProvider: React.FC = ({ ...other }) => {
  const createApplication = ApplicationServiceAPI.createApplicationAPI
  const uploadDocument = ApplicationServiceAPI.uploadDocumentAPI

  const value = { createApplication, uploadDocument }
  return <ApplicationContext.Provider value={value} {...other} />
}
