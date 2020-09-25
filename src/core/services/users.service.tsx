import { AxiosResponse } from "axios"
import UserModel from "../models/user.model"
import { httpClient } from "../../utils/http"

export interface UserService {
  getUsersAPI: () => Promise<AxiosResponse>
  getUserAPI: (userId: string) => Promise<AxiosResponse>
  createUserAPI: (params: UserModel) => Promise<AxiosResponse>
  updateUserAPI: (params: UserModel) => Promise<AxiosResponse>
  deleteUserAPI: (userId: string) => Promise<AxiosResponse>
}

const getUsersAPI = async (): Promise<AxiosResponse> => {
  return await httpClient.get(`/users`)
}

const getUserAPI = async (userId: string): Promise<AxiosResponse> => {
  return await httpClient.get(`/users/${userId}`)
}

const createUserAPI = async (params: UserModel): Promise<AxiosResponse> => {
  return await httpClient.post(`/users`, params)
}

const updateUserAPI = async (params: UserModel): Promise<AxiosResponse> => {
  return await httpClient.patch(`/users`, params)
}

const deleteUserAPI = async (userId: string): Promise<AxiosResponse> => {
  return await httpClient.delete(`/users/${userId}`)
}

const UserServiceAPI: UserService = { getUsersAPI, getUserAPI, createUserAPI, updateUserAPI, deleteUserAPI }

export default UserServiceAPI
