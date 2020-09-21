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
      defaultValue={""}
      render={({ onChange, value, name }) => (
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel id={`${data.name}-label`}>{data.label}</InputLabel>
          <Select labelId={`${data.name}-label`} id={name} name={name} onChange={onChange} label={data.label} value={value}>
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
