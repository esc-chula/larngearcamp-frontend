import React, { createContext, useContext, useEffect, useCallback, useState } from "react"
import useSWR from "swr"
import { useAuthContext } from "./auth.provider"
import { ApplicationDTO, UpdateApplicationDTO } from "../models/dto/application.dto"
import { FieldValues, UseFormOptions, UseFormMethods, useForm } from "react-hook-form"
import ApplicationServiceAPI from "../services/application.service"

interface ApplicationStateContextValue {
  application: ApplicationDTO
  updateApplication: (application: UpdateApplicationDTO) => Promise<void>
  finalizeApplication: () => Promise<void>
}

const ApplicationStateContext = createContext({} as ApplicationStateContextValue)

export const useApplicationStateContext = () => useContext(ApplicationStateContext)

export function useApplicationForm<TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(
  mapApplicationToModel: (application: ApplicationDTO) => TFieldValues,
  options?: UseFormOptions<TFieldValues, TContext>
): UseFormMethods<TFieldValues> {
  const { application } = useApplicationStateContext()
  const [filled, setFilled] = useState(false)
  const form = useForm(options)
  const { setValue } = form
  useEffect(() => {
    if (!application || filled) return
    setFilled(true)
    const transformSetValue = (key: string, value: any) => setValue(key.substring(1), value)
    setAll(mapApplicationToModel(application), transformSetValue)
  }, [filled, application, setValue, mapApplicationToModel])
  return form
}

export const ApplicationStateProvider: React.FC<{ children: (render: boolean) => React.ReactElement }> = ({ children }) => {
  const { userId } = useAuthContext()
  const { data: application, mutate: mutateApplication } = useSWR(
    userId ? `application (${userId})` : null,
    ApplicationServiceAPI.getApplicationAPI,
    { revalidateOnFocus: false }
  )
  //console.log("application", application)

  const updateApplication = useCallback(
    async (application: UpdateApplicationDTO) => {
      //console.log("application inner ", application)
      await mutateApplication(await ApplicationServiceAPI.updateApplicationAPI(application), false)
    },
    [mutateApplication]
  )
  const finalizeApplication = useCallback(async () => {
    await mutateApplication(async application => {
      const result = await ApplicationServiceAPI.finalizeApplicationAPI()
      return { ...application, ...result.application }
    }, false)
  }, [mutateApplication])

  return (
    <ApplicationStateContext.Provider value={{ application: application as any, updateApplication, finalizeApplication }}>
      {children(!!application)}
    </ApplicationStateContext.Provider>
  )
}

function setAll(data: any, setValue: (key: string, value: any) => void, prefix: string = "") {
  if (Array.isArray(data)) {
    data.forEach((val, index) => {
      setAll(val, setValue, `${prefix}[${index}]`)
    })
  } else if (typeof data === "object" && data !== null) {
    Object.keys(data).forEach(key => {
      setAll(data[key], setValue, `${prefix}.${key}`)
    })
  } else {
    setValue(prefix, data)
  }
}
