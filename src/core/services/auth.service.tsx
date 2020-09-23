import LoginModel from "../models/login.model"
import { AxiosResponse } from "axios"
import { httpClient, authHttpClient } from "../../utils/http"
import ForgotPasswordModel from "../models/forgotPassword.model"
import ResetPasswordModel from "../models/resetPassword.model"
import React, { createContext, useContext, useCallback } from "react"
import MeDTO from "../models/dto/me.dto"

export interface AuthServiceConstruct {
  loginAPI: (params: LoginModel) => Promise<AxiosResponse>
  loginFbAPI: (signedRequest: string) => Promise<AxiosResponse>
  logoutAPI: (accessToken: string) => Promise<AxiosResponse>
  meAPI: (accessToken: string | null) => Promise<AxiosResponse<MeDTO>>
  refreshAPI: (accessToken: string) => Promise<AxiosResponse>
  forgotPasswordAPI: (params: ForgotPasswordModel) => Promise<AxiosResponse>
  resetPasswordAPI: (params: ResetPasswordModel) => Promise<AxiosResponse>
}

export const AuthServiceContext = createContext({} as AuthServiceConstruct)

export const useAuthServiceContext = () => useContext(AuthServiceContext)

function getAuthorizationHeader(accessToken: string | null) {
  return {
    Authorization: `Bearer ${accessToken}`
  }
}

export const AuthServiceProvider = ({ ...other }) => {
  const loginAPI = useCallback(async (params: LoginModel): Promise<AxiosResponse> => {
    return await authHttpClient.post(`/auth/login`, params)
  }, [])

  const loginFbAPI = useCallback(async (signedRequest: string): Promise<AxiosResponse> => {
    return await authHttpClient.post(`/auth/loginFb`, { signedRequest })
  }, [])

  const logoutAPI = useCallback(async (accessToken: string): Promise<AxiosResponse> => {
    return await authHttpClient.post(`/auth/logout`, undefined, { headers: getAuthorizationHeader(accessToken) })
  }, [])

  const meAPI = useCallback(async (accessToken: string | null): Promise<AxiosResponse<MeDTO>> => {
    if (accessToken !== undefined) {
      return await authHttpClient.get(`/auth/me`, { headers: getAuthorizationHeader(accessToken) })
    } else {
      return await httpClient.get(`/auth/me`)
    }
  }, [])

  const refreshAPI = useCallback(async (accessToken: string): Promise<AxiosResponse> => {
    return await authHttpClient.post(`/auth/refresh`, undefined, {
      headers: getAuthorizationHeader(accessToken)
    })
  }, [])

  const forgotPasswordAPI = useCallback(async (params: ForgotPasswordModel): Promise<AxiosResponse> => {
    return await authHttpClient.post(`/auth/forget-password`, params)
  }, [])

  const resetPasswordAPI = useCallback(async (params: ResetPasswordModel): Promise<AxiosResponse> => {
    return await authHttpClient.patch(`/auth/reset-password`, params)
  }, [])

  const value = { loginAPI, loginFbAPI, logoutAPI, meAPI, refreshAPI, forgotPasswordAPI, resetPasswordAPI }

  return <AuthServiceContext.Provider value={value} {...other} />
}
