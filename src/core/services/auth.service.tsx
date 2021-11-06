import LoginModel from "../models/login.model"
import { AxiosResponse } from "axios"
import { httpClient, authHttpClient } from "../../utils/http"
import ForgotPasswordModel from "../models/forgotPassword.model"
import ResetPasswordModel from "../models/resetPassword.model"
import MeDTO from "../models/dto/me.dto"

export interface AuthService {
  loginAPI: (params: LoginModel) => Promise<AxiosResponse>
  loginFbAPI: (token: string) => Promise<AxiosResponse>
  logoutAPI: (accessToken: string) => Promise<AxiosResponse>
  meAPI: (accessToken: string | null) => Promise<AxiosResponse<MeDTO>>
  refreshAPI: (accessToken: string) => Promise<AxiosResponse>
  loginGoogleAPI: (token: string) => Promise<AxiosResponse>
  forgotPasswordAPI: (params: ForgotPasswordModel) => Promise<AxiosResponse>
  resetPasswordAPI: (params: ResetPasswordModel) => Promise<AxiosResponse>
}

function getAuthorizationHeader(accessToken: string | null) {
  return {
    Authorization: `Bearer ${accessToken}`
  }
}

const loginAPI = async (params: LoginModel): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/login`, params)
}

const loginFbAPI = async (token: string): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/login/facebook`, { token })
}

const loginGoogleAPI = async (token: string): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/login/google`, { token })
}

const logoutAPI = async (accessToken: string): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/logout`, undefined, { headers: getAuthorizationHeader(accessToken) })
}

const meAPI = async (accessToken: string | null): Promise<AxiosResponse<MeDTO>> => {
  if (accessToken !== undefined) {
    return await authHttpClient.get(`/auth/me`, { headers: getAuthorizationHeader(accessToken) })
  } else {
    return await httpClient.get(`/auth/me`)
  }
}

const refreshAPI = async (accessToken: string): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/refresh`, undefined, {
    headers: getAuthorizationHeader(accessToken)
  })
}

const forgotPasswordAPI = async (params: ForgotPasswordModel): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/forget-password`, params)
}

const resetPasswordAPI = async (params: ResetPasswordModel): Promise<AxiosResponse> => {
  return await authHttpClient.patch(`/auth/reset-password`, params)
}

const AuthServiceAPI: AuthService = { loginGoogleAPI, loginAPI, loginFbAPI, logoutAPI, meAPI, refreshAPI, forgotPasswordAPI, resetPasswordAPI }

export default AuthServiceAPI
