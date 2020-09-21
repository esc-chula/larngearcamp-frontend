import LoginModel from "../models/login.model"
import { AxiosResponse } from "axios"
import { httpClient } from "../../utils/http"
import ForgotPasswordModel from "../models/forgotPassword.model"

const login = async (params: LoginModel): Promise<AxiosResponse> => {
  return await httpClient.post(`/auth/login`, params)
}

const loginFb = async (accessToken: string): Promise<AxiosResponse> => {
  return await httpClient.post(`/auth/loginFb`, { accessToken })
}

const logout = async (): Promise<AxiosResponse> => {
  return await httpClient.post(`/auth/logout`, {})
}

const me = async (): Promise<AxiosResponse> => {
  return await httpClient.get(`/auth/me`)
}

const refresh = async (): Promise<AxiosResponse> => {
  return await httpClient.post(`/auth/refresh`, {})
}

const forgotPassword = async (params: ForgotPasswordModel): Promise<AxiosResponse> => {
  return await httpClient.post(`/auth/forget-password`, params)
}

const resetPassword = async (params: { password: string }): Promise<AxiosResponse> => {
  return await httpClient.patch(`/auth/reset-password`, params)
}

const AuthService = { login, loginFb, logout, me, refresh, forgotPassword, resetPassword }

export default AuthService
