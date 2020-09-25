import React from "react"
import { InputLabel, Select, MenuItem, FormControlProps, FormControl, FormHelperText } from "@material-ui/core"
import SelectModel from "../models/select.model"
import { Controller, useFormContext } from "react-hook-form"
import { resolve } from "../../utils/modify"

interface SelectProps extends FormControlProps {
  data: SelectModel
  control: any
}

const SelectComponent: React.FC<SelectProps> = ({ control, data }) => {
  const { errors } = useFormContext()
  const selfError = resolve(data.name, errors)
  return (
    <Controller
      name={data.name}
      control={control}
      defaultValue=""
      render={props => (
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel error={!!selfError}>{data.label}</InputLabel>
          <Select label={data.label} {...props} error={!!selfError}>
            {data.contents.map((content, index) => (
              <MenuItem value={content.value} key={data.name + content.text + content.value + index}>
                {content.text}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error={!!selfError}>{selfError?.message}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

export { SelectComponent }
