import { httpClient } from "../../utils/http"
import { ApplicationDTO, UpdateApplicationDTO, ApplicationStateDTO, AllDocumentStateDetail, DocumentStateDetail } from "../models/dto/application.dto"
import FileDTO from "../models/dto/file.dto"

export interface ApplicationService {
  createApplicationAPI: () => Promise<void>
  uploadDocumentAPI: (data: FormData) => Promise<DocumentStateDetail>
  getApplicationAPI: () => Promise<ApplicationDTO>
  updateApplicationAPI: (application: UpdateApplicationDTO) => Promise<ApplicationDTO>
  finalizeApplicationAPI: () => Promise<ApplicationDTO>
  getApplicationStateAPI: () => Promise<ApplicationStateDTO>
  getAttachmentAPI: () => Promise<AllDocumentStateDetail>
}

const createApplicationAPI = async (): Promise<void> => {
  return (await httpClient.post(`/application`)).data
}

const uploadDocumentAPI = async (data: FormData): Promise<DocumentStateDetail> => {
  return (await httpClient.post(`/application/attachment`, data)).data
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
  return (await httpClient.post(`/application`)).data
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
