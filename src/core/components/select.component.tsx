import React from "react"
import { FormControl, InputLabel, Select, MenuItem, FormControlProps } from "@material-ui/core"
import SelectModel from "../models/select.model"

interface SelectComponentProps extends FormControlProps {
  data: SelectModel
  value: string
  onChange: (event: any) => void
}

const SelectComponent: React.FC<SelectComponentProps> = ({ data, value, onChange, ref, ...other }) => {
  return (
    <FormControl {...other}>
      <InputLabel id={`${data.name}-label`}>หมู่เลือด</InputLabel>
      <Select labelId={`${data.name}-label`} id={data.name} name={data.name} value={value} onChange={onChange} label="หมู่เลือด" ref={ref}>
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
