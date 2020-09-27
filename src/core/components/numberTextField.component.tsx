import React, { useCallback } from "react"
import { TextField, TextFieldProps } from "@material-ui/core"
import { useFormContext, Controller } from "react-hook-form"
import { resolve } from "../../utils/modify"
import { inputPropsConstant, TextFieldPropsOverride } from "./textField.component"

const NumberTextField: React.FC<TextFieldProps & { onChange: (...value: any[]) => void }> = ({ onChange, ...props }) => {
  const onChangeFilterNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value.replace(/\D/g, ""))
    },
    [onChange]
  )
  return <TextField onChange={onChangeFilterNumber} {...inputPropsConstant} {...props} />
}

const NumberTextFieldComponent: React.FC<TextFieldPropsOverride> = ({ name, ...props }) => {
  const { errors, control } = useFormContext()
  const selfError = resolve(name, errors)
  return (
    <Controller
      name={name}
      control={control}
      render={controllerProps => <NumberTextField {...controllerProps} {...props} error={!!selfError} helperText={selfError?.message} />}
    />
  )
}

export { NumberTextFieldComponent }
