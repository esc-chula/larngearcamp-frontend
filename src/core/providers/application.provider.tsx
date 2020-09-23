import React, { createContext, useCallback, useContext } from "react"
import { useApplicationServiceContext } from "../services/application.service"
import ProfileDTO from "../models/dto/profile.dto"
import Answer1DTO from "../models/dto/answer1.dto"
import Answer2DTO from "../models/dto/answer2.dto"
import UploadFileDTO from "../models/dto/upload.dto"
import { AxiosResponse } from "axios"
import { useAuthContext } from "./auth.provider"

interface ApplicationConstruct {
  createApplication: () => Promise<AxiosResponse<any>>
  updateApplication: (props: ProfileDTO | Answer1DTO | Answer2DTO | UploadFileDTO) => Promise<AxiosResponse<any>>
  finalizeApplication: () => Promise<AxiosResponse<any>>
  getApplication: () => Promise<AxiosResponse<any>>
}

export const ApplicationContext = createContext({} as ApplicationConstruct)

export const useApplicationContext = () => useContext(ApplicationContext)

export const ApplicationProvider: React.FC = ({ ...other }) => {
  const { createApplicationAPI, finalizeApplicationAPI, getApplicationAPI, updateApplicationAPI } = useApplicationServiceContext()
  const { refresh } = useAuthContext()

  const createApplication = useCallback(async () => {
    await refresh()
    return await createApplicationAPI()
  }, [refresh, createApplicationAPI])
  const finalizeApplication = useCallback(async () => {
    await refresh()
    return await finalizeApplicationAPI()
  }, [refresh, finalizeApplicationAPI])
  const getApplication = useCallback(async () => {
    await refresh()
    return await getApplicationAPI()
  }, [refresh, getApplicationAPI])
  const updateApplication = useCallback(
    async (props: ProfileDTO | Answer1DTO | Answer2DTO | UploadFileDTO) => {
      await refresh()
      return await updateApplicationAPI(props)
    },
    [refresh, updateApplicationAPI]
  )

  const value = { createApplication, finalizeApplication, getApplication, updateApplication }
  return <ApplicationContext.Provider value={value} {...other} />
}
