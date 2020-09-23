import { httpClient } from "../../utils/http"
import { AxiosResponse } from "axios"
import React, { createContext, useContext, useCallback } from "react"
import ProfileDTO from "../models/dto/profile.dto"
import Answer1DTO from "../models/dto/answer1.dto"
import Answer2DTO from "../models/dto/answer2.dto"
import UploadFileDTO from "../models/dto/upload.dto"

export interface ApplicationServiceConstruct {
  createApplicationAPI: () => Promise<AxiosResponse>
  getApplicationAPI: () => Promise<AxiosResponse>
  finalizeApplicationAPI: () => Promise<AxiosResponse>
  updateApplicationAPI: (params: ProfileDTO | Answer1DTO | Answer2DTO | UploadFileDTO) => Promise<AxiosResponse>
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

  const updateApplicationAPI = useCallback(async (params: ProfileDTO | Answer1DTO | Answer2DTO | UploadFileDTO): Promise<AxiosResponse> => {
    return await httpClient.patch(`/application`, params)
  }, [])

  const value = { createApplicationAPI, getApplicationAPI, finalizeApplicationAPI, updateApplicationAPI }
  return <ApplicationServiceContext.Provider value={value} {...other} />
}
