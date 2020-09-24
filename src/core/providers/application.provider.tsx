import React, { createContext, useContext } from "react"
import { useApplicationServiceContext } from "../services/application.service"
import { AxiosResponse } from "axios"
import DocumentType from "../models/documentType.constant"

interface ApplicationConstruct {
  createApplication: () => Promise<AxiosResponse<any>>
  uploadDocument: (data: FormData, type: DocumentType) => Promise<AxiosResponse>
}

export const ApplicationContext = createContext({} as ApplicationConstruct)

export const useApplicationContext = () => useContext(ApplicationContext)

export const ApplicationProvider: React.FC = ({ ...other }) => {
  const { createApplicationAPI, uploadDocumentAPI } = useApplicationServiceContext()

  const createApplication = createApplicationAPI
  const uploadDocument = uploadDocumentAPI

  const value = { createApplication, uploadDocument }
  return <ApplicationContext.Provider value={value} {...other} />
}
