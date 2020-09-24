import { httpClient } from "../../utils/http"
import { AxiosResponse } from "axios"
import React, { createContext, useContext, useCallback } from "react"
import DocumentType from "../models/documentType.constant"

export interface ApplicationServiceConstruct {
  createApplicationAPI: () => Promise<AxiosResponse>
  uploadDocumentAPI: (data: FormData, type: DocumentType) => Promise<AxiosResponse>
}

export const ApplicationServiceContext = createContext({} as ApplicationServiceConstruct)

export const useApplicationServiceContext = () => useContext(ApplicationServiceContext)

export const ApplicationServiceProvider = ({ ...other }) => {
  const createApplicationAPI = useCallback(async (): Promise<AxiosResponse> => {
    return await httpClient.post(`/application`)
  }, [])

  const uploadDocumentAPI = useCallback(async (data: FormData, type: DocumentType): Promise<AxiosResponse> => {
    return await httpClient.post(`/application/document/${type}`, data)
  }, [])

  const value = { createApplicationAPI, uploadDocumentAPI }
  return <ApplicationServiceContext.Provider value={value} {...other} />
}
