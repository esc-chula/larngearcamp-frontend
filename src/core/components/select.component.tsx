import React from "react"
import { InputLabel, Select, MenuItem, FormControlProps, FormControl } from "@material-ui/core"
import SelectModel from "../models/select.model"
import { Controller } from "react-hook-form"

interface SelectProps extends FormControlProps {
  data: SelectModel
  control: any
}

const SelectComponent: React.FC<SelectProps> = ({ control, data }) => {
  return (
    <Controller
      name={data.name}
      control={control}
      defaultValue=""
      render={props => (
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel>{data.label}</InputLabel>
          <Select label={data.label} {...props}>
            {data.contents.map((content, index) => (
              <MenuItem value={content.value} key={data.name + content.text + content.value + index}>
                {content.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  )
}

export { SelectComponent }
