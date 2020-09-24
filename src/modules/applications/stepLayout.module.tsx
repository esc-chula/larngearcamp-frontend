import React, { useMemo } from "react"
import { Container } from "@material-ui/core"
import ButtonBar, { ButtonBarProps } from "../../core/components/buttonBar.component"
import { FieldValues, UseFormMethods, UnpackNestedValue } from "react-hook-form"

type ApplicationStepModuleProps = ButtonBarProps & {
  children: (props: { buttonBar: React.ReactNode }) => React.ReactElement
}

const ApplicationStepModule: React.FC<ApplicationStepModuleProps> = ({ beforeNavigate, children }) => {
  return <Container maxWidth="lg">{children({ buttonBar: <ButtonBar beforeNavigate={beforeNavigate} /> })}</Container>
}

export function verifyAndSubmit<TFieldValues extends FieldValues = FieldValues>(
  trigger: UseFormMethods<TFieldValues>["trigger"],
  getValues: UseFormMethods<TFieldValues>["getValues"],
  onValid: (data: UnpackNestedValue<TFieldValues>) => boolean | Promise<boolean>
) {
  return async (event?: React.BaseSyntheticEvent) => {
    event?.preventDefault()
    if (await trigger()) {
      return await onValid(getValues())
    } else {
      return false
    }
  }
}

export function useHandleSubmit<TFieldValues extends FieldValues = FieldValues>(
  methods: UseFormMethods<TFieldValues>,
  onValid: (data: UnpackNestedValue<TFieldValues>) => boolean | Promise<boolean>
) {
  return useMemo(() => {
    return verifyAndSubmit(methods.trigger, methods.getValues, onValid)
  }, [methods.trigger, methods.getValues, onValid])
}

export default ApplicationStepModule
