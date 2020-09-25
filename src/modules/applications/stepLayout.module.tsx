import React, { useCallback } from "react"
import ButtonBar, { ButtonBarProps } from "../../core/components/buttonBar.component"
import { FieldValues, UseFormMethods, UnpackNestedValue } from "react-hook-form"

type ApplicationStepModuleProps = ButtonBarProps & {
  children: (props: { buttonBar: React.ReactNode }) => React.ReactElement
}

const ApplicationStepModule: React.FC<ApplicationStepModuleProps> = ({ beforeNavigate, children }) => {
  return children({ buttonBar: <ButtonBar beforeNavigate={beforeNavigate} /> })
}

export function useHandleSubmit<TFieldValues extends FieldValues = FieldValues>(
  methods: UseFormMethods<TFieldValues>,
  onValid: (data: UnpackNestedValue<TFieldValues>) => boolean | Promise<boolean>
) {
  const { handleSubmit } = methods
  return useCallback(
    async (event?: React.BaseSyntheticEvent) => {
      let result = false
      await handleSubmit(async values => {
        result = await onValid(values)
      })(event)
      return result
    },
    [handleSubmit, onValid]
  )
}

export default ApplicationStepModule
