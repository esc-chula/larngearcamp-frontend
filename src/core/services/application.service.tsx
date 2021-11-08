import { httpClient } from "../../utils/http"
import DocumentType from "../models/documentType.constant"
import { ApplicationDTO, UpdateApplicationDTO, ApplicationStateDTO, AllDocumentStateDetail } from "../models/dto/application.dto"
import FileDTO from "../models/dto/file.dto"

export interface ApplicationService {
  createApplicationAPI: () => Promise<void>
  uploadDocumentAPI: (data: FormData, type: DocumentType) => Promise<FileDTO>
  getApplicationAPI: () => Promise<ApplicationDTO>
  updateApplicationAPI: (application: UpdateApplicationDTO) => Promise<ApplicationDTO>
  finalizeApplicationAPI: () => Promise<ApplicationDTO>
  getApplicationStateAPI: () => Promise<ApplicationStateDTO>
  getAttachmentAPI: () => Promise<AllDocumentStateDetail>
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

const getAttachmentAPI = async (): Promise<AllDocumentStateDetail> => {
  return (await httpClient.get(`/application/attachment`)).data
}

const getApplicationStateAPI = async (): Promise<ApplicationStateDTO> => {
  return (await httpClient.get(`/application/state`)).data
}

const updateApplicationAPI = async (application: UpdateApplicationDTO): Promise<ApplicationDTO> => {
  return (await httpClient.patch(`/application`, application)).data
}

const finalizeApplicationAPI = async (): Promise<ApplicationDTO> => {
  return (await httpClient.post(`/application/final`)).data
}

const ApplicationServiceAPI: ApplicationService = {
  createApplicationAPI,
  uploadDocumentAPI,
  getApplicationAPI,
  updateApplicationAPI,
  finalizeApplicationAPI,
  getApplicationStateAPI,
  getAttachmentAPI
}

export default ApplicationServiceAPI
