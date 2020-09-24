import React, { createContext, useContext, useEffect, useCallback, useState } from "react"
import useSWR from "swr"
import { useAuthContext } from "./auth.provider"
import { ApplicationDTO, UpdateApplicationDTO } from "../models/dto/application.dto"
import { FieldValues, UseFormOptions, UseFormMethods, useForm } from "react-hook-form"
import { format } from "date-fns"
import { ProfileModel } from "../../schemas/profile.schema"
import { Answer1Model } from "../../schemas/answer1.schema"
import { Answer2Model } from "../../schemas/answer2.schema"
import ApplicationServiceAPI from "../services/application.service"

interface ApplicationStateContextValue {
  application?: ApplicationDTO
  updateApplication: (application: UpdateApplicationDTO) => Promise<void>
  finalizeApplication: () => Promise<void>
}

const ApplicationStateContext = createContext({} as ApplicationStateContextValue)

export const useApplicationStateContext = () => useContext(ApplicationStateContext)

export function useApplicationForm<TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(
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
    setAll(mapApplication(application), transformSetValue)
  }, [filled, application, setValue])
  return form
}

export const ApplicationStateProvider: React.FC<{ children: (render: boolean) => React.ReactElement }> = ({ children }) => {
  const { accessToken } = useAuthContext()
  const { data: application, mutate: mutateApplication } = useSWR(
    accessToken ? `application (${accessToken})` : null,
    ApplicationServiceAPI.getApplicationAPI,
    { revalidateOnFocus: false }
  )

  const updateApplication = useCallback(
    async (application: UpdateApplicationDTO) => {
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
    <ApplicationStateContext.Provider value={{ application, updateApplication, finalizeApplication }}>
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

type ApplicationModel = ProfileModel & Answer1Model & Answer2Model

function mapApplication(application: ApplicationDTO): ApplicationModel {
  const birthDateDate = new Date(application.birthDate)
  const formattedBirthDate = format(birthDateDate, "yyyy-MM-dd")
  const profileModel: ProfileModel = {
    ...application,
    birthDate: formattedBirthDate
  }
  const {
    answer4: { fifth: answer4fifth, sixth: answer4sixth, ...answer4Rest },
    ...firstPartRest
  } = application.answer?.firstPart || { answer4: {} }
  const answer1Model: Answer1Model = {
    ...firstPartRest,
    answer4: {
      ...answer4Rest,
      fifth: {
        text: answer4fifth ? answer4fifth : "",
        checked: !!answer4fifth
      },
      sixth: {
        text: answer4sixth ? answer4sixth : "",
        checked: !!answer4sixth
      }
    },
    answer6: `${firstPartRest.answer6}`
  }
  const answer2Model: Answer2Model = application.answer?.secondPart
  return { ...profileModel, ...(answer1Model as any), ...answer2Model }
}
