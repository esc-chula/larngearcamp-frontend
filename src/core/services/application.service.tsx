import { httpClient } from "../../utils/http"
import { AxiosResponse } from "axios"

const createApplication = async (): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: create application")
    const result = await httpClient.post(`/application`)
    process.env.REACT_APP_DEBUG && console.log("finish create application", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const updateApplication = async (params: any): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: update application")
    const result = await httpClient.patch(`/application`, params)
    process.env.REACT_APP_DEBUG && console.log("finish update application", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const getApplication = async (): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: get application")
    const result = await httpClient.get(`/application`)
    process.env.REACT_APP_DEBUG && console.log("finish get application", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const finalizeApplication = async (params: any): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: finalize application")
    const result = await httpClient.post(`/application/final`, {})
    process.env.REACT_APP_DEBUG && console.log("finish finalize application", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const ApplicationService = { createApplication, updateApplication, getApplication, finalizeApplication }
export default ApplicationService
