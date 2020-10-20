import UserModel from "../models/user.model"
import { httpClient } from "../../utils/http"
import UserDTO from "../models/dto/user.dto"

export interface UserService {
  getUsersAPI: () => Promise<Array<UserDTO>>
  getUserAPI: (userId: string) => Promise<UserDTO>
  createUserAPI: (params: UserModel) => Promise<any>
  updateUserAPI: (params: UserModel) => Promise<any>
  deleteUserAPI: (userId: string) => Promise<any>
}

const getUsersAPI = async (): Promise<Array<UserDTO>> => {
  return (await httpClient.get(`/users`)).data
}

const getUserAPI = async (userId: string): Promise<UserDTO> => {
  return (await httpClient.get(`/users/${userId}`)).data
}

const createUserAPI = async (params: UserModel): Promise<any> => {
  return (await httpClient.post(`/users`, params)).data
}

const updateUserAPI = async (params: UserModel): Promise<any> => {
  return (await httpClient.patch(`/users`, params)).data
}

const deleteUserAPI = async (userId: string): Promise<any> => {
  return (await httpClient.delete(`/users/${userId}`)).data
}

const UserServiceAPI: UserService = { getUsersAPI, getUserAPI, createUserAPI, updateUserAPI, deleteUserAPI }

export default UserServiceAPI
