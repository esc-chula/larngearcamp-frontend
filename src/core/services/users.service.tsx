import { AxiosResponse } from "axios"
import UserModel from "../models/user.model"
import { httpClient } from "../../utils/http"
import React, { createContext, useCallback, useContext } from "react"

export interface UserServiceConstruct {
  getUsersAPI: () => Promise<AxiosResponse>
  getUserAPI: (userId: string) => Promise<AxiosResponse>
  createUserAPI: (params: UserModel) => Promise<AxiosResponse>
  updateUserAPI: (params: UserModel) => Promise<AxiosResponse>
  deleteUserAPI: (userId: string) => Promise<AxiosResponse>
}

export const UserSercviceContext = createContext({} as UserServiceConstruct)

export const useUserServiceContext = () => useContext(UserSercviceContext)

export const UserServiceProvider = ({ ...other }) => {
  const getUsersAPI = useCallback(async (): Promise<AxiosResponse> => {
    return await httpClient.get(`/users`)
  }, [])

  const getUserAPI = useCallback(async (userId: string): Promise<AxiosResponse> => {
    return await httpClient.get(`/users/${userId}`)
  }, [])

  const createUserAPI = useCallback(async (params: UserModel): Promise<AxiosResponse> => {
    return await httpClient.post(`/users`, params)
  }, [])

  const updateUserAPI = useCallback(async (params: UserModel): Promise<AxiosResponse> => {
    return await httpClient.patch(`/users`, params)
  }, [])

  const deleteUserAPI = useCallback(async (userId: string): Promise<AxiosResponse> => {
    return await httpClient.delete(`/users/${userId}`)
  }, [])

  const value = { getUsersAPI, getUserAPI, createUserAPI, updateUserAPI, deleteUserAPI }

  return <UserSercviceContext.Provider value={value} {...other} />
}
