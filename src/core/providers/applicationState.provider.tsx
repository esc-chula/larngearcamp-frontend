import React, { createContext, useContext, useCallback, useMemo } from "react"
import useSWR, { responseInterface } from "swr"
import { useAuthContext } from "./auth.provider"
import { UpdateApplicationDTO } from "../models/dto/application.dto"
import { FieldValues, UseFormOptions, UseFormMethods, useForm, UnpackNestedValue, DeepPartial } from "react-hook-form"
import ApplicationServiceAPI from "../services/application.service"
import { ApplicationModels } from "../models/application.models"

interface ApplicationStateContextValue {
  application: ApplicationModels
  updateApplication: (application: UpdateApplicationDTO) => Promise<void>
  finalizeApplication: () => Promise<void>
  mutateApplication: responseInterface<ApplicationModels, Error>["mutate"]
}

const ApplicationStateContext = createContext({} as ApplicationStateContextValue)

export const useApplicationStateContext = () => useContext(ApplicationStateContext)

export function useApplicationForm<TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(
  mapApplicationToModel: (application: ApplicationModels) => UnpackNestedValue<DeepPartial<TFieldValues>>,
  options?: UseFormOptions<TFieldValues, TContext>
): UseFormMethods<TFieldValues> {
  const { application } = useApplicationStateContext()

  const defaultValues = useMemo(() => {
    return mapApplicationToModel(application)
  }, [application, mapApplicationToModel])

  return useForm({ ...options, defaultValues })
}

export const ApplicationStateProvider: React.FC<{ children: (render: boolean, is404: boolean) => React.ReactElement }> = ({ children }) => {
  const { userId } = useAuthContext()

  const fetchApplication = async (): Promise<ApplicationModels> => {
    const resApp = await ApplicationServiceAPI.getApplicationAPI()
    const resState = await ApplicationServiceAPI.getApplicationStateAPI()
    const resAttach = await ApplicationServiceAPI.getAttachmentAPI()

    return {
      ...resApp,
      ...resState,
      photo: {
        ...resAttach.photo,
        url: resAttach.photo.url || ""
      },
      parentalConsent: {
        ...resAttach.parentalConsent,
        url: resAttach.parentalConsent.url || ""
      },
      transcript: {
        ...resAttach.transcript,
        url: resAttach.transcript.url || ""
      }
    }
  }

  const { data: application, mutate: mutateApplication, error } = useSWR(userId ? `application (${userId})` : null, fetchApplication, {
    revalidateOnFocus: false
  })

  const is404 = error?.response?.status === 404
  // console.log("application", application)

  const updateApplication = useCallback(
    async (application: UpdateApplicationDTO) => {
      //console.log("application inner ", application)
      await ApplicationServiceAPI.updateApplicationAPI(application)
      await mutateApplication(fetchApplication, true)
    },
    [mutateApplication]
  )
  const finalizeApplication = useCallback(async () => {
    await ApplicationServiceAPI.finalizeApplicationAPI()

    await mutateApplication(fetchApplication, true)
  }, [mutateApplication])

  return (
    <ApplicationStateContext.Provider value={{ application: application as any, updateApplication, finalizeApplication, mutateApplication }}>
      {children(!!application, is404)}
    </ApplicationStateContext.Provider>
  )
}
