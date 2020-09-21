import { AxiosResponse } from "axios"
import axios from "axios"
import UserModel from "../models/user.model"
import { httpClient } from "../../utils/http"

const getUsers = async (): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: getUsers")
    const result = await httpClient.get(`${process.env.REACT_APP_API_SERVER}/users`)
    process.env.REACT_APP_DEBUG && console.log("finish getUsers", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const getUser = async (params: { userId: string }): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: getUser")
    const result = await httpClient.get(`${process.env.REACT_APP_API_SERVER}/users/${params?.userId}`)
    process.env.REACT_APP_DEBUG && console.log("finish getUser", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const createUser = async (params: UserModel): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: createUser")
    const result = await httpClient.post(`${process.env.REACT_APP_API_SERVER}/users`, params)
    process.env.REACT_APP_DEBUG && console.log("finish createUser", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const updateUser = async (params: UserModel): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: updateUser")
    const result = await httpClient.patch(`${process.env.REACT_APP_API_SERVER}/users`, params)
    process.env.REACT_APP_DEBUG && console.log("finish updateUser", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const deleteUser = async (params: { userId: string }): Promise<AxiosResponse> => {
  try {
    process.env.REACT_APP_DEBUG && console.log("on request: deleteUser")
    const result = await axios.delete(`${process.env.REACT_APP_API_SERVER}/users/${params?.userId}`)
    process.env.REACT_APP_DEBUG && console.log("finish logout", result)
    return result
  } catch (error) {
    process.env.REACT_APP_DEBUG && console.log("error", error.response)
    return error.response
  }
}

const UsersService = { getUsers, getUser, createUser, updateUser, deleteUser }
export default UsersService
