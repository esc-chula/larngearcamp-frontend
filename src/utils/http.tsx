import axios from "axios"

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 5000
})

const authHttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 5000
})

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

export { httpClient, authHttpClient, get, post, put, del }
