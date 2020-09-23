import React, { createContext, useContext } from "react"
import { useApplicationServiceContext } from "../services/application.service"
import ProfileDTO from "../models/dto/profile.dto"
import Answer1DTO from "../models/dto/answer1.dto"
import Answer2DTO from "../models/dto/answer2.dto"
import UploadFileDTO from "../models/dto/upload.dto"
import { AxiosResponse } from "axios"

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

  const createApplication = createApplicationAPI
  const finalizeApplication = finalizeApplicationAPI
  const getApplication = getApplicationAPI
  const updateApplication = updateApplicationAPI

  const value = { createApplication, finalizeApplication, getApplication, updateApplication }
  return <ApplicationContext.Provider value={value} {...other} />
}
