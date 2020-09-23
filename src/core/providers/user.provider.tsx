import React, { createContext, useContext } from "react"
import { AxiosResponse } from "axios"
import UserModel from "../models/user.model"
import { useUserServiceContext } from "../services/users.service"

interface UserConstruct {
  getUsers: () => Promise<AxiosResponse>
  getUser: (userId: string) => Promise<AxiosResponse>
  createUser: (params: UserModel) => Promise<AxiosResponse>
  updateUser: (params: UserModel) => Promise<AxiosResponse>
  deleteUser: (userId: string) => Promise<AxiosResponse>
}

export const UserContext = createContext({} as UserConstruct)

export const useUserContext = () => useContext(UserContext)

export const UserProvider: React.FC = ({ ...other }) => {
  const { getUsersAPI, getUserAPI, createUserAPI, updateUserAPI, deleteUserAPI } = useUserServiceContext()

  const getUsers = getUsersAPI
  const getUser = getUserAPI
  const createUser = createUserAPI
  const updateUser = updateUserAPI
  const deleteUser = deleteUserAPI

  const value = { getUsers, getUser, createUser, updateUser, deleteUser }
  return <UserContext.Provider value={value} {...other} />
}
