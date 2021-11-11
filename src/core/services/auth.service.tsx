import { AxiosResponse } from "axios"
import { authHttpClient } from "../../utils/http"
export interface AuthService {
  loginFbAPI: (token: string) => Promise<AxiosResponse>
  logoutAPI: () => Promise<AxiosResponse>
  loginGoogleAPI: (token: string) => Promise<AxiosResponse>
  getCurrentUserAPI: () => Promise<AxiosResponse>
}

const loginFbAPI = async (token: string): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/login/facebook`, { token })
}

const loginGoogleAPI = async (token: string): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/login/google`, { token })
}

const logoutAPI = async (): Promise<AxiosResponse> => {
  return await authHttpClient.post(`/auth/logout`, undefined)
}

const getCurrentUserAPI = async (): Promise<AxiosResponse> => {
  return await authHttpClient.get("/auth/currentUser")
}

const AuthServiceAPI: AuthService = { loginGoogleAPI, loginFbAPI, logoutAPI, getCurrentUserAPI }

export default AuthServiceAPI
