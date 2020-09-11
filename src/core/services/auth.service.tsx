import LoginModel from "../models/login.model"
import { AxiosResponse } from "axios"
import { setLocalStorage, removeLocalStorage } from "../../utils/storage"
import { httpClient } from "../../utils/http"

const login = async (params: LoginModel | undefined): Promise<AxiosResponse> => {
  try {
    const result = await httpClient.post(`/auth/login`, {
      email: params?.email,
      password: params?.password
    })
    process.env.NODE_ENV === "development" && console.log("success", result)
    setLocalStorage("ACCESS_TOKEN", result.data.token)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log("error", error.response)
    return error.response
  }
}

const logout = async (): Promise<AxiosResponse> => {
  try {
    const result = await httpClient.post(`/auth/logout`, {})
    process.env.NODE_ENV === "development" && console.log("success", result)
    removeLocalStorage("ACCESS_TOKEN")
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log("error", error)
    return error.response
  }
}

const me = async (): Promise<AxiosResponse> => {
  try {
    const result = await httpClient.get(`/auth/me`)
    process.env.NODE_ENV === "development" && console.log("success", result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log("error", error.response)
    return error.response
  }
}

const refresh = async (): Promise<AxiosResponse> => {
  try {
    const result = await httpClient.get(`/auth/refresh`)
    process.env.NODE_ENV === "development" && console.log("success", result)
    setLocalStorage("ACCESS_TOKEN", result.data.token)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log("error", error.response)
    return error.response
  }
}

const forgetPassword = async (): Promise<AxiosResponse> => {
  try {
    const result = await httpClient.post(`/auth/forget-password`)
    process.env.NODE_ENV === "development" && console.log("success", result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log("error", error.response)
    return error.response
  }
}

const resetPassword = async (): Promise<AxiosResponse> => {
  try {
    const result = await httpClient.patch(`/auth/reset-password`)
    process.env.NODE_ENV === "development" && console.log("success", result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log("error", error.response)
    return error.response
  }
}

const AuthService = { login, logout, me, refresh, forgetPassword, resetPassword }

export default AuthService
