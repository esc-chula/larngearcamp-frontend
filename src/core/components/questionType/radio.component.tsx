import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { RadioGroup, FormControlLabel, Radio, Typography } from "@material-ui/core"
import ChoiceModel from "../../models/choice.model"
import { resolve } from "../../../utils/modify"

interface RadioTypeProps {
  name: string
  contents: Array<ChoiceModel> | undefined
  className?: any
}

const RadioTypeComponent: React.FC<RadioTypeProps> = ({ name, contents, ...other }) => {
  const { control, errors } = useFormContext()
  const selfError = resolve(name, errors)
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        as={
          <RadioGroup aria-label={name}>
            {contents?.map((content, index) => (
              <FormControlLabel
                key={name + index}
                label={content.label}
                value={`${index + 1}`}
                style={{ width: "fit-content" }}
                control={<Radio color="primary" />}
              />
            ))}
          </RadioGroup>
        }
      />
      {!!selfError && (
        <Typography variant="caption" color="error">
          {selfError?.message}
        </Typography>
      )}
    </>
  )
}

export { RadioTypeComponent }
