import { httpClient } from "../../utils/http"
import {
  ApplicationDTO,
  UpdateApplicationDTO,
  ApplicationStateDTO,
  AllDocumentStateDetail,
  DocumentStateDetail,
  updateApplicationPostSubmitDTO
} from "../models/dto/application.dto"

export interface ApplicationService {
  createApplicationAPI: () => Promise<void>
  uploadDocumentAPI: (data: FormData) => Promise<DocumentStateDetail>
  getApplicationAPI: () => Promise<ApplicationDTO>
  updateApplicationAPI: (application: UpdateApplicationDTO) => Promise<ApplicationDTO>
  finalizeApplicationAPI: () => Promise<ApplicationDTO>
  getApplicationStateAPI: () => Promise<ApplicationStateDTO>
  getAttachmentAPI: () => Promise<AllDocumentStateDetail>
  updateApplicationPostSubmitAPI: (application: updateApplicationPostSubmitDTO) => Promise<ApplicationDTO>
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

const updateApplicationPostSubmitAPI = async (partialApplication: updateApplicationPostSubmitDTO): Promise<ApplicationDTO> => {
  return (await httpClient.patch(`/application/post_submission`, partialApplication)).data
}

const ApplicationServiceAPI: ApplicationService = {
  createApplicationAPI,
  uploadDocumentAPI,
  getApplicationAPI,
  updateApplicationAPI,
  finalizeApplicationAPI,
  getApplicationStateAPI,
  getAttachmentAPI,
  updateApplicationPostSubmitAPI
}

export default ApplicationServiceAPI
