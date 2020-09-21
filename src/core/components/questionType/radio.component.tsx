import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core"
import ChoiceModel from "../../models/choice.model"

interface RadioTypeProps {
  name: string
  contents: Array<ChoiceModel> | undefined
  className?: any
}

const RadioTypeComponent: React.FC<RadioTypeProps> = ({ name, contents, ...other }) => {
  const { control } = useFormContext()
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        {...other}
        as={
          <RadioGroup aria-label={name}>
            {contents?.map((content, index) => (
              <FormControlLabel key={index} label={content.label} value={index + 1} control={<Radio color="primary" />} />
            ))}
          </RadioGroup>
        }
      />
    </>
  )
}

export { RadioTypeComponent }
