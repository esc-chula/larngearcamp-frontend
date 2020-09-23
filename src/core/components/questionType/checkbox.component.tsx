import React from "react"
import { Controller, useFormContext, useWatch } from "react-hook-form"
import { Checkbox, FormControlLabel, Typography, TextField, makeStyles } from "@material-ui/core"
import ChoiceModel from "../../models/choice.model"
import { sequenceConstant } from "../../constants/sequence.constant"
import { resolve } from "../../../utils/other"

interface CheckboxTypeProps {
  name: string
  contents: Array<ChoiceModel> | undefined
  className?: any
}

const useStyles = makeStyles(theme => ({
  errorMSG: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(-2)
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  formControlLabel: {
    width: "fit-content"
  },
  inputContainer: {
    display: "flex",
    alignItems: "center"
  }
}))

const CheckboxTypeComponent: React.FC<CheckboxTypeProps> = ({ name, contents }) => {
  const classes = useStyles()
  const { control, errors } = useFormContext()
  const checkedValues: any | undefined = useWatch({ name: name })
  const selfError = resolve(name, errors)

  return (
    <div className={classes.container}>
      {contents?.map((content, index) => {
        const seq = `${sequenceConstant[index + 1]}`
        const newName = `${name}.${seq}`
        return (
          <div key={index} className={classes.inputContainer}>
            <Controller
              name={content.textfield ? `${newName}.checked` : newName}
              control={control}
              defaultValue={false}
              render={({ onChange, onBlur, value, name }) => (
                <FormControlLabel
                  name={name}
                  label={content.textfield ? "" : content.label}
                  className={classes.formControlLabel}
                  control={<Checkbox color="primary" onBlur={onBlur} onChange={e => onChange(e.target.checked)} checked={value} />}
                />
              )}
            />
            {content.textfield && (
              <Controller
                name={`${newName}.text`}
                control={control}
                defaultValue=""
                as={
                  <TextField
                    size="small"
                    disabled={!!checkedValues ? !checkedValues[seq]?.checked : true}
                    label={content.label}
                    className={classes.textField}
                  />
                }
              />
            )}
          </div>
        )
      })}
      {!!selfError && (
        <Typography variant="caption" color="error" className={classes.errorMSG}>
          {selfError?.message}
        </Typography>
      )}
    </div>
  )
}

export { CheckboxTypeComponent }
