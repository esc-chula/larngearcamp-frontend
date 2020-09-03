import LoginModel from "../models/login.model"
import axios, { AxiosResponse, AxiosRequestConfig } from "axios"

const LoginService = async (params: LoginModel | undefined): Promise<AxiosResponse> => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_API_SERVER}/auth/login`, {
      email: params?.email,
      password: params?.password
    } as AxiosRequestConfig)
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

export { LoginService }
