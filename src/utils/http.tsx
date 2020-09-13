import axios from "axios"
import { AxiosRequestConfig } from "axios"
import { getLocalStorage } from "./storage"

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 5000
})

const authHeaderConfig = (config: AxiosRequestConfig) => {
  const accessToken = getLocalStorage("ACCESS_TOKEN")
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ""
  return config
}

httpClient.interceptors.request.use(authHeaderConfig)

async function get<T>(url: string, params?: any): Promise<T> {
  return await httpClient.get(url, params)
}

async function post<D, T>(url: string, data?: D): Promise<T> {
  return await httpClient.post(url, data)
}

async function put<D, T>(url: string, data?: D): Promise<T> {
  return await httpClient.put(url, data)
}

async function del(url: string): Promise<void> {
  await httpClient.delete(url)
}

export { httpClient, get, post, put, del }
