import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { ShowLoadingComponent } from "../components/loading.component"
import { ApplicationDTO, DocumentState, ApplicationState } from "../models/dto/application.dto"
import TableData from "../models/tableData.model"
import UserServiceAPI from "../services/users.service"
import ApplicationServiceAPI from "../services/application.service"
import { adminSplitingApplicationProfilePart, adminSplitingApplicationAnswerPart, adminSplitingApplicationDocumentPart } from "../../utils/modify"
import { UserDisplayDataProps } from "../components/userDisplayData.component"

interface AdminConstruct {
  selectedUser: TableData | undefined
  setSelectedUser: (user: TableData) => Promise<void>
  modifiedUsersData: Array<TableData> | undefined
  applicationProfilePart: UserDisplayDataProps[] | undefined
  applicationAnswerPart: UserDisplayDataProps[] | undefined
  applicationDocumentPart: UserDisplayDataProps[] | undefined
}

export const ApplicationContext = createContext({} as AdminConstruct)

export const useAdminContext = () => useContext(ApplicationContext)

export const AdminProvider: React.FC = ({ ...other }) => {
  const [selectedUser, setUser] = useState<TableData>()
  const [application, setApplication] = useState<ApplicationDTO>()
  const [modifiedUsersData, setModifiedUsersData] = useState<Array<TableData>>()

  const getAllUsers = useCallback(async () => {
    try {
      const result = await UserServiceAPI.getUsersAPI()
      const modifiedResult: Array<TableData> = result.map(({ id, name, application }) => {
        let userName = !!name ? `${name.first} ${name.last}` : "NO NAME"
        let docStatus = `${application?.documentState}` as DocumentState
        let appStatus = `${application?.applicationState}` as ApplicationState
        return { id: id, name: userName, documentStatus: docStatus, applicantStatus: appStatus }
      })
      setModifiedUsersData(modifiedResult)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const setSelectedUser = useCallback(async (user: TableData) => {
    setUser(user)
    try {
      const result = await ApplicationServiceAPI.getApplicationByIdAPI(user.id)
      setApplication(result)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const applicationProfilePart = useMemo(() => {
    if (application) {
      return adminSplitingApplicationProfilePart(application)
    }
  }, [application])

  const applicationAnswerPart = useMemo(() => {
    if (application) {
      return adminSplitingApplicationAnswerPart(application)
    }
  }, [application])

  const applicationDocumentPart = useMemo(() => {
    if (application) {
      return adminSplitingApplicationDocumentPart(application)
    }
  }, [application])

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  const value = {
    selectedUser,
    setSelectedUser,
    modifiedUsersData,
    applicationProfilePart,
    applicationAnswerPart,
    applicationDocumentPart
  }

  if (!modifiedUsersData) return <ShowLoadingComponent />
  return <ApplicationContext.Provider value={value} {...other} />
}
