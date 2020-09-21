import LoginModel from "../models/login.model"
import { AxiosResponse } from "axios"
import { httpClient } from "../../utils/http"
import ForgotPasswordModel from "../models/forgotPassword.model"

const login = async (params: LoginModel): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: login")
    const result = await httpClient.post(`/auth/login`, params)
    process.env.REACT_APP_DEBUG && console.log("finish login", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const loginFb = async (accessToken: string): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: loginFb")
    const result = await httpClient.post(`/auth/loginFb`, { accessToken })
    process.env.REACT_APP_DEBUG && console.log("finish loginFB", result)
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
    process.env.REACT_APP_DEBUG && console.log("finish logout", result)
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
    process.env.REACT_APP_DEBUG && console.log("finish me", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const refresh = async (): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: refresh")
    const result = await httpClient.post(`/auth/refresh`, {})
    process.env.REACT_APP_DEBUG && console.log("finish refresh", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const forgotPassword = async (params: ForgotPasswordModel): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: forget password")
    const result = await httpClient.post(`/auth/forget-password`, params)
    process.env.REACT_APP_DEBUG && console.log("finish forgot password", result)
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
    process.env.REACT_APP_DEBUG && console.log("finish reset password", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const AuthService = { login, loginFb, logout, me, refresh, forgotPassword, resetPassword }

export default AuthService
