import LoginModel from "../models/login.model"
import axios, { AxiosResponse } from "axios"
import { setLocalStorage, removeLocalStorage, getLocalStorage } from "../../utils/storage"

const login = async (params: LoginModel | undefined): Promise<AxiosResponse> => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_API_SERVER}/auth/login`, {
      email: params?.email,
      password: params?.password
    })
    process.env.NODE_ENV === "development" && console.log(result)
    setLocalStorage("ACCESS_TOKEN", result.data.token)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const logout = async (): Promise<AxiosResponse> => {
  try {
    const accessToken = getLocalStorage("ACCESS_TOKEN")
    const result = await axios.post(`${process.env.REACT_APP_API_SERVER}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    process.env.NODE_ENV === "development" && console.log(result)
    removeLocalStorage("ACCESS_TOKEN")
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const me = async (): Promise<AxiosResponse> => {
  try {
    const accessToken = getLocalStorage("ACCESS_TOKEN")
    const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const refresh = async (): Promise<AxiosResponse> => {
  try {
    const accessToken = getLocalStorage("ACCESS_TOKEN")
    const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/auth/refresh`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    process.env.NODE_ENV === "development" && console.log(result)
    setLocalStorage("ACCESS_TOKEN", result.data.token)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const forgetPassword = async (): Promise<AxiosResponse> => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_API_SERVER}/auth/forget-password`)
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const resetPassword = async (): Promise<AxiosResponse> => {
  try {
    const result = await axios.patch(`${process.env.REACT_APP_API_SERVER}/auth/reset-password`)
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const AuthService = { login, logout, me, refresh, forgetPassword, resetPassword }

export default AuthService
