import LoginModel from "../models/login.model"
import axios, { AxiosResponse, AxiosRequestConfig } from "axios"

const LoginService = async (params: LoginModel | undefined): Promise<AxiosResponse> => {
  const result = await axios.get("/", {
    email: params?.email,
    password: params?.password
  } as AxiosRequestConfig)

  // console.log(result)
  return result
}

export { LoginService }
