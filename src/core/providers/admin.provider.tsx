import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useLoadingStatus } from "../components/loading.component"
import TableData from "../models/tableData.model"
import UserServiceAPI from "../services/users.service"

interface AdminConstruct {
  selectedUser: TableData | undefined
  setSelectedUser: React.Dispatch<React.SetStateAction<TableData | undefined>>
  modifiedUsersData: Array<TableData> | undefined
}

export const ApplicationContext = createContext({} as AdminConstruct)

export const useAdminContext = () => useContext(ApplicationContext)

export const AdminProvider: React.FC = ({ ...other }) => {
  const setLoading = useLoadingStatus()
  const [selectedUser, setSelectedUser] = useState<TableData>()
  const [modifiedUsersData, setModifiedUsersData] = useState<Array<TableData>>()

  const getAllUsers = useCallback(async () => {
    setLoading(true)
    try {
      const result = await UserServiceAPI.getUsersAPI()
      const modifiedResult: Array<TableData> = result.map(({ id, name }) => {
        let userName = !!name ? `${name.first} ${name.last}` : " NO NAME"
        return { id: id, name: userName, documentStatus: "", applicantStatus: "" }
      })
      setModifiedUsersData(modifiedResult)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [setLoading])

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  const value = { selectedUser, setSelectedUser, modifiedUsersData }
  return <ApplicationContext.Provider value={value} {...other} />
}
