import { httpClient } from "../../utils/http"
import { AxiosResponse } from "axios"

const createApplication = async (): Promise<AxiosResponse> => {
  return await httpClient.post(`/application`)
}

const updateApplication = async (params: any): Promise<AxiosResponse> => {
  return await httpClient.patch(`/application`, params)
}

const getApplication = async (): Promise<AxiosResponse> => {
  return await httpClient.get(`/application`)
}

const finalizeApplication = async (params: any): Promise<AxiosResponse> => {
  return await httpClient.post(`/application/final`, {})
}

const ApplicationService = { createApplication, updateApplication, getApplication, finalizeApplication }
export default ApplicationService
