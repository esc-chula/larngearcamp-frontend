import React, { createContext, useCallback, useContext } from "react"
import { useApplicationServiceContext } from "../services/application.service"
import ProfileDTO from "../models/dto/profile.dto"
import Answer1DTO from "../models/dto/answer1.dto"
import Answer2DTO from "../models/dto/answer2.dto"
import { AxiosResponse } from "axios"
import { useAuthContext } from "./auth.provider"
import DocumentType from "../models/documentType.constant"
import DocumentDTO from "../models/dto/document.dto"

interface ApplicationConstruct {
  createApplication: () => Promise<AxiosResponse<any>>
  updateApplication: (props: ProfileDTO | Answer1DTO | Answer2DTO | DocumentDTO) => Promise<AxiosResponse<any>>
  finalizeApplication: () => Promise<AxiosResponse<any>>
  getApplication: () => Promise<AxiosResponse<any>>
  uploadDocument: (data: FormData, type: DocumentType) => Promise<AxiosResponse>
}

export const ApplicationContext = createContext({} as ApplicationConstruct)

export const useApplicationContext = () => useContext(ApplicationContext)

export const ApplicationProvider: React.FC = ({ ...other }) => {
  const { createApplicationAPI, finalizeApplicationAPI, getApplicationAPI, updateApplicationAPI, uploadDocumentAPI } = useApplicationServiceContext()
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
    async (props: ProfileDTO | Answer1DTO | Answer2DTO | DocumentDTO) => {
      await refresh()
      return await updateApplicationAPI(props)
    },
    [refresh, updateApplicationAPI]
  )
  const uploadDocument = useCallback(
    async (data: FormData, type: DocumentType) => {
      await refresh()
      return await uploadDocumentAPI(data, type)
    },
    [refresh, uploadDocumentAPI]
  )

  const value = { createApplication, finalizeApplication, getApplication, updateApplication, uploadDocument }
  return <ApplicationContext.Provider value={value} {...other} />
}
