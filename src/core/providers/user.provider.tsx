import React, { createContext, useContext } from "react"
import { AxiosResponse } from "axios"
import UserModel from "../models/user.model"
import UserServiceAPI from "../services/users.service"

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
  const getUsers = UserServiceAPI.getUsersAPI
  const getUser = UserServiceAPI.getUserAPI
  const createUser = UserServiceAPI.createUserAPI
  const updateUser = UserServiceAPI.updateUserAPI
  const deleteUser = UserServiceAPI.deleteUserAPI

  const value = { getUsers, getUser, createUser, updateUser, deleteUser }
  return <UserContext.Provider value={value} {...other} />
}
