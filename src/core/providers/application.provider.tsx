import React, { createContext, useContext } from "react"
import { useApplicationServiceContext } from "../services/application.service"
import ProfileDTO from "../models/dto/profile.dto"
import Answer1DTO from "../models/dto/answer1.dto"
import Answer2DTO from "../models/dto/answer2.dto"
import { AxiosResponse } from "axios"
import DocumentDTO from "../models/dto/document.dto"
import DocumentType from "../models/documentType.constant"

interface ApplicationConstruct {
  createApplication: () => Promise<AxiosResponse<any>>
  updateApplication: (props: ProfileDTO | Answer1DTO | Answer2DTO | DocumentDTO) => Promise<AxiosResponse<any>>
  finalizeApplication: () => Promise<AxiosResponse<any>>
  getApplication: () => Promise<AxiosResponse<any>>
  uploadDocument: (data: FormData, type: DocumentType) => Promise<AxiosResponse>
}

export const ApplicationContext = createContext({} as ApplicationConstruct)

export const useApplicationContext = () => useContext(ApplicationContext)

export const ApplicationProvider: React.FC = ({ ...other }) => {
  const { createApplicationAPI, finalizeApplicationAPI, getApplicationAPI, updateApplicationAPI, uploadDocumentAPI } = useApplicationServiceContext()

  const createApplication = createApplicationAPI
  const finalizeApplication = finalizeApplicationAPI
  const getApplication = getApplicationAPI
  const updateApplication = updateApplicationAPI
  const uploadDocument = uploadDocumentAPI

  const value = { createApplication, finalizeApplication, getApplication, updateApplication, uploadDocument }
  return <ApplicationContext.Provider value={value} {...other} />
}
