import { AxiosResponse } from "axios"
import axios from "axios"
import UserModel from "../models/user.model"
import { httpClient } from "../../utils/http"

const getUsers = async (): Promise<AxiosResponse> => {
  try {
    process.env.NODE_ENV === "development" && console.log("on request: getUsers")
    const result = await httpClient.get(`${process.env.REACT_APP_API_SERVER}/users`)
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const getUser = async (params: { userId: string } | undefined): Promise<AxiosResponse> => {
  try {
    process.env.NODE_ENV === "development" && console.log("on request: getUser")
    const result = await httpClient.get(`${process.env.REACT_APP_API_SERVER}/users/${params?.userId}`)
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const createUser = async (params: UserModel | undefined): Promise<AxiosResponse> => {
  try {
    process.env.NODE_ENV === "development" && console.log("on request: createUser")
    const result = await httpClient.post(`${process.env.REACT_APP_API_SERVER}/users`, {
      email: params?.email,
      password: params?.password
    })
    console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const updateUser = async (params: UserModel | undefined): Promise<AxiosResponse> => {
  try {
    process.env.NODE_ENV === "development" && console.log("on request: updateUser")
    const result = await httpClient.patch(`${process.env.REACT_APP_API_SERVER}/users`, {
      email: params?.email,
      password: params?.password
    })
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const deleteUser = async (params: { userId: string } | undefined): Promise<AxiosResponse> => {
  try {
    process.env.NODE_ENV === "development" && console.log("on request: deleteUser")
    const result = await axios.delete(`${process.env.REACT_APP_API_SERVER}/users/${params?.userId}`)
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const UsersService = { getUsers, getUser, createUser, updateUser, deleteUser }
export default UsersService
