import axios from "axios"

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 10000
})

const authHttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 10000
})

async function httpGet<T>(url: string, params?: any): Promise<T> {
  return await httpClient.get(url, params)
}

async function httpPost<D, T>(url: string, data?: D): Promise<T> {
  return await httpClient.post(url, data)
}

async function httpPut<D, T>(url: string, data?: D): Promise<T> {
  return await httpClient.put(url, data)
}

async function httpPatch<D, T>(url: string, data?: D): Promise<T> {
  return await httpClient.patch(url, data)
}

async function httpDelete(url: string): Promise<void> {
  await httpClient.delete(url)
}

export { httpClient, authHttpClient, httpGet, httpPost, httpPut, httpPatch, httpDelete }
