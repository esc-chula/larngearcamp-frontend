import React from "react"
import { TextField, TextFieldProps } from "@material-ui/core"
import { useFormContext } from "react-hook-form"
import { resolve } from "../../utils/other"

const inputPropsConstant: TextFieldProps = {
  size: "small",
  fullWidth: true,
  variant: "outlined"
}

type TextFieldPropsOverride = TextFieldProps & { name: string }

const TextFieldComponent: React.FC<TextFieldPropsOverride> = props => {
  const { errors, register } = useFormContext()
  const selfError = resolve(props.name, errors)
  return <TextField {...props} {...inputPropsConstant} error={!!selfError} helperText={selfError?.message} inputRef={register} />
}

export { TextFieldComponent }
