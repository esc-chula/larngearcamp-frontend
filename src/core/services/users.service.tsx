import { AxiosResponse } from "axios"
import axios from "axios"
import UserModel from "../models/user.model"
import { httpClient } from "../../utils/http"

const getUsers = async (): Promise<AxiosResponse> => {
  return await httpClient.get(`${process.env.REACT_APP_API_SERVER}/users`)
}

const getUser = async (params: { userId: string }): Promise<AxiosResponse> => {
  return await httpClient.get(`${process.env.REACT_APP_API_SERVER}/users/${params?.userId}`)
}

const createUser = async (params: UserModel): Promise<AxiosResponse> => {
  return await httpClient.post(`${process.env.REACT_APP_API_SERVER}/users`, params)
}

const updateUser = async (params: UserModel): Promise<AxiosResponse> => {
  return await httpClient.patch(`${process.env.REACT_APP_API_SERVER}/users`, params)
}

const deleteUser = async (params: { userId: string }): Promise<AxiosResponse> => {
  return await axios.delete(`${process.env.REACT_APP_API_SERVER}/users/${params?.userId}`)
}

const UsersService = { getUsers, getUser, createUser, updateUser, deleteUser }
export default UsersService
