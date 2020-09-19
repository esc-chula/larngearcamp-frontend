import LoginModel from "../models/login.model"
import { AxiosResponse } from "axios"
import { setLocalStorage, removeLocalStorage } from "../../utils/storage"
import { httpClient } from "../../utils/http"

const login = async (params: LoginModel | undefined): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: login")
    const result = await httpClient.post(`/auth/login`, {
      email: params?.email,
      password: params?.password
    })
    process.env.REACT_APP_DEBUG && console.log("success", result)
    setLocalStorage("ACCESS_TOKEN", result.data.token)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const logout = async (): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: logout")
    const result = await httpClient.post(`/auth/logout`, {})
    process.env.REACT_APP_DEBUG && console.log("success", result)
    removeLocalStorage("ACCESS_TOKEN")
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const me = async (): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: me")
    const result = await httpClient.get(`/auth/me`)
    process.env.REACT_APP_DEBUG && console.log("success", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const refresh = async (): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: refresh")
    const result = await httpClient.get(`/auth/refresh`)
    process.env.REACT_APP_DEBUG && console.log("success", result)
    setLocalStorage("ACCESS_TOKEN", result.data.token)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const forgetPassword = async (): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: forget password")
    const result = await httpClient.post(`/auth/forget-password`)
    process.env.REACT_APP_DEBUG && console.log("success", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const resetPassword = async (params: { password: string }): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: reset password")
    const result = await httpClient.patch(`/auth/reset-password`, params)
    process.env.REACT_APP_DEBUG && console.log("success", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const AuthService = { login, logout, me, refresh, forgetPassword, resetPassword }

export default AuthService
