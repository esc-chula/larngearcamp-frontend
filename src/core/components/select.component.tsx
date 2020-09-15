import React from "react"
import { FormControl, InputLabel, Select, MenuItem, FormControlProps } from "@material-ui/core"
import SelectModel from "../models/select.model"

interface SelectProps extends FormControlProps {
  data: SelectModel
  value: string
  onChange: (event: any) => void
  cusTomRef: ((instance: unknown) => void) | React.RefObject<unknown> | null | undefined
}

const SelectComponent: React.FC<SelectProps> = ({ data, value, onChange, cusTomRef, ...other }) => {
  return (
    <FormControl {...other}>
      <InputLabel id={`${data.name}-label`}>{data.label}</InputLabel>
      <Select labelId={`${data.name}-label`} id={data.name} name={data.name} value={value} onChange={onChange} label={data.label} ref={cusTomRef}>
        {data.contents.map((content, index) => (
          <MenuItem value={content.value} key={data.name + content.text + content.value + index}>
            {content.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export { SelectComponent }
