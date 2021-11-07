import { AxiosResponse } from "axios"
import { httpClient } from "../../utils/http"
import DocumentType from "../models/documentType.constant"
import { ApplicationDTO, UpdateApplicationDTO, ApplicationInfo } from "../models/dto/application.dto"
import FileDTO from "../models/dto/file.dto"

export interface ApplicationService {
  createApplicationAPI: () => Promise<void>
  uploadDocumentAPI: (data: FormData, type: DocumentType) => Promise<FileDTO>
  getApplicationAPI: () => Promise<ApplicationDTO>
  updateApplicationAPI: (application: UpdateApplicationDTO) => Promise<ApplicationDTO>
  finalizeApplicationAPI: () => Promise<{ message: string; application: ApplicationInfo }>
}

const createApplicationAPI = async (): Promise<void> => {
  return (await httpClient.post(`/application`)).data
}

const uploadDocumentAPI = async (data: FormData, type: DocumentType): Promise<FileDTO> => {
  return (await httpClient.post(`/application/document/${type}`, data)).data
}

const getApplicationAPI = async (): Promise<ApplicationDTO> => {
  return (await httpClient.get(`/application`)).data
}

const getFormState = async (): Promise<AxiosResponse> => {
  return (await httpClient.get(`/application/state`)).data
}

const updateApplicationAPI = async (application: UpdateApplicationDTO): Promise<ApplicationDTO> => {
  return (await httpClient.patch(`/application`, application)).data
}

const finalizeApplicationAPI = async (): Promise<{ message: string; application: ApplicationInfo }> => {
  return (await httpClient.post(`/application/final`)).data
}

const ApplicationServiceAPI: ApplicationService = {
  createApplicationAPI,
  uploadDocumentAPI,
  getApplicationAPI,
  updateApplicationAPI,
  finalizeApplicationAPI
}

export default ApplicationServiceAPI
