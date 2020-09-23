import LoginModel from "../models/login.model"
import { AxiosResponse } from "axios"
import { httpClient } from "../../utils/http"
import ForgotPasswordModel from "../models/forgotPassword.model"
import ResetPasswordModel from "../models/resetPassword.model"
import React, { createContext, useContext, useCallback } from "react"
import MeModel from "../models/me.model"

export interface AuthServiceConstruct {
  loginAPI: (params: LoginModel) => Promise<AxiosResponse>
  loginFbAPI: (accessToken: string) => Promise<AxiosResponse>
  logoutAPI: () => Promise<AxiosResponse>
  meAPI: () => Promise<AxiosResponse<MeModel>>
  refreshAPI: () => Promise<AxiosResponse>
  forgotPasswordAPI: (params: ForgotPasswordModel) => Promise<AxiosResponse>
  resetPasswordAPI: (params: ResetPasswordModel) => Promise<AxiosResponse>
}

export const AuthServiceContext = createContext({} as AuthServiceConstruct)

export const useAuthServiceContext = () => useContext(AuthServiceContext)

export const AuthServiceProvider = ({ ...other }) => {
  const loginAPI = useCallback(async (params: LoginModel): Promise<AxiosResponse> => {
    return await httpClient.post(`/auth/login`, params)
  }, [])

  const loginFbAPI = useCallback(async (accessToken: string): Promise<AxiosResponse> => {
    return await httpClient.post(`/auth/loginFb`, { accessToken })
  }, [])

  const logoutAPI = useCallback(async (): Promise<AxiosResponse> => {
    return await httpClient.post(`/auth/logout`, {})
  }, [])

  const meAPI = useCallback(async (): Promise<AxiosResponse<MeModel>> => {
    return await httpClient.get(`/auth/me`)
  }, [])

  const refreshAPI = useCallback(async (): Promise<AxiosResponse> => {
    return await httpClient.post(`/auth/refresh`, {})
  }, [])

  const forgotPasswordAPI = useCallback(async (params: ForgotPasswordModel): Promise<AxiosResponse> => {
    return await httpClient.post(`/auth/forget-password`, params)
  }, [])

  const resetPasswordAPI = useCallback(async (params: ResetPasswordModel): Promise<AxiosResponse> => {
    return await httpClient.patch(`/auth/reset-password`, params)
  }, [])

  const value = { loginAPI, loginFbAPI, logoutAPI, meAPI, refreshAPI, forgotPasswordAPI, resetPasswordAPI }

  return <AuthServiceContext.Provider value={value} {...other} />
}
