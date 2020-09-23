import React, { createContext, useCallback, useContext } from "react"
import { AxiosResponse } from "axios"
import UserModel from "../models/user.model"
import { useUserServiceContext } from "../services/users.service"
import { useAuthContext } from "./auth.provider"

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
  const { refresh } = useAuthContext()

  const getUsers = useCallback(async () => {
    await refresh()
    return await getUsersAPI()
  }, [refresh, getUsersAPI])
  const getUser = useCallback(
    async (userId: string) => {
      await refresh()
      return await getUserAPI(userId)
    },
    [refresh, getUserAPI]
  )
  const createUser = useCallback(async (params: UserModel) => await createUserAPI(params), [createUserAPI])
  const updateUser = useCallback(async (params: UserModel) => await updateUserAPI(params), [updateUserAPI])
  const deleteUser = useCallback(
    async (userId: string) => {
      await refresh()
      return await deleteUserAPI(userId)
    },
    [refresh, deleteUserAPI]
  )

  const value = { getUsers, getUser, createUser, updateUser, deleteUser }
  return <UserContext.Provider value={value} {...other} />
}
