import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { Checkbox, FormControlLabel, Box } from "@material-ui/core"
import ChoiceModel from "../../models/choice.model"

interface CheckboxTypeProps {
  name: string
  contents: Array<ChoiceModel> | undefined
  className?: any
}

const CheckboxTypeComponent: React.FC<CheckboxTypeProps> = ({ name, contents, ...other }) => {
  const { control } = useFormContext()
  return (
    <Box mt={3} display="flex" flexDirection="column">
      {contents?.map((content, index) => (
        <Controller
          key={index}
          name={`choice-${index}`}
          control={control}
          defaultValue={false}
          {...other}
          render={({ onChange, onBlur, value, name }) => (
            <FormControlLabel
              label={content.label}
              control={<Checkbox color="primary" onBlur={onBlur} onChange={e => onChange(e.target.checked)} checked={value} />}
            />
          )}
        />
      ))}
    </Box>
  )
}

export { CheckboxTypeComponent }
