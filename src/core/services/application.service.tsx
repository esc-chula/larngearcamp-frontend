import { httpClient } from "../../utils/http"
import { AxiosResponse } from "axios"
import React, { createContext, useContext, useCallback } from "react"
import ProfileDTO from "../models/dto/profile.dto"
import Answer1DTO from "../models/dto/answer1.dto"
import Answer2DTO from "../models/dto/answer2.dto"
import DocumentType from "../models/documentType.constant"
import DocumentDTO from "../models/dto/document.dto"

export interface ApplicationServiceConstruct {
  createApplicationAPI: () => Promise<AxiosResponse>
  getApplicationAPI: () => Promise<AxiosResponse>
  finalizeApplicationAPI: () => Promise<AxiosResponse>
  updateApplicationAPI: (params: ProfileDTO | Answer1DTO | Answer2DTO | DocumentDTO) => Promise<AxiosResponse>
  uploadDocumentAPI: (data: FormData, type: DocumentType) => Promise<AxiosResponse>
}

export const ApplicationServiceContext = createContext({} as ApplicationServiceConstruct)

export const useApplicationServiceContext = () => useContext(ApplicationServiceContext)

export const ApplicationServiceProvider = ({ ...other }) => {
  const createApplicationAPI = useCallback(async (): Promise<AxiosResponse> => {
    return await httpClient.post(`/application`)
  }, [])

  const getApplicationAPI = useCallback(async (): Promise<AxiosResponse> => {
    return await httpClient.get(`/application`)
  }, [])

  const finalizeApplicationAPI = useCallback(async (): Promise<AxiosResponse> => {
    return await httpClient.post(`/application/final`, {})
  }, [])

  const updateApplicationAPI = useCallback(async (params: ProfileDTO | Answer1DTO | Answer2DTO | DocumentDTO): Promise<AxiosResponse> => {
    return await httpClient.patch(`/application`, params)
  }, [])

  const uploadDocumentAPI = useCallback(async (data: FormData, type: DocumentType): Promise<AxiosResponse> => {
    return await httpClient.post(`/application/document/${type}`, data)
  }, [])

  const value = { createApplicationAPI, getApplicationAPI, finalizeApplicationAPI, updateApplicationAPI, uploadDocumentAPI }
  return <ApplicationServiceContext.Provider value={value} {...other} />
}
