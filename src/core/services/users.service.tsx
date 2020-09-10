import { AxiosResponse } from "axios"
import axios from "axios"
import { getLocalStorage } from "../../utils/storage"
import UserModel from "../models/user.model"

const getUsers = async (): Promise<AxiosResponse> => {
  try {
    const accessToken = getLocalStorage("ACCESS_TOKEN")
    const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const getUser = async (params: { userId: string } | undefined): Promise<AxiosResponse> => {
  try {
    const accessToken = getLocalStorage("ACCESS_TOKEN")
    const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/users/${params?.userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const createUser = async (params: UserModel | undefined): Promise<AxiosResponse> => {
  try {
    const accessToken = getLocalStorage("ACCESS_TOKEN")
    const result = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/users`,
      {
        email: params?.email,
        password: params?.password
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const updateUser = async (params: UserModel | undefined): Promise<AxiosResponse> => {
  try {
    const accessToken = getLocalStorage("ACCESS_TOKEN")
    const result = await axios.patch(
      `${process.env.REACT_APP_API_SERVER}/users`,
      {
        email: params?.email,
        password: params?.password
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const deleteUser = async (params: { userId: string } | undefined): Promise<AxiosResponse> => {
  try {
    const accessToken = getLocalStorage("ACCESS_TOKEN")
    const result = await axios.delete(`${process.env.REACT_APP_API_SERVER}/users/${params?.userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    process.env.NODE_ENV === "development" && console.log(result)
    return result
  } catch (error) {
    process.env.NODE_ENV === "development" && console.log(error.response)
    return error.response
  }
}

const UsersService = { getUsers, getUser, createUser, updateUser, deleteUser }
export default UsersService
