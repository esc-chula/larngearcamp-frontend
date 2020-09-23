import React, { useMemo } from "react"
import { StandardTextFieldProps, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useFormContext, useWatch } from "react-hook-form"
import { resolve } from "../../../utils/other"

interface MultiLineTypeProps {
  name: string
  wordCount?:
    | {
        min: number
        max: number
      }
    | undefined
}

const useStyles = makeStyles(theme => ({
  mutiline: {
    "&>*:not(p)": {
      minHeight: 80,
      display: "flex",
      alignItems: "flex-start"
    }
  }
}))

const MultilineTypeComponent: React.FC<StandardTextFieldProps & MultiLineTypeProps> = ({ name, wordCount, ...other }) => {
  const classes = useStyles()
  const { register, errors } = useFormContext()
  const value: string | undefined = useWatch({ name: name })
  const selfError = resolve(name, errors)
  const isOutOfRange = useMemo(() => (!!wordCount && !!value ? value.length > wordCount.max : 0), [value, wordCount])

  return (
    <>
      {wordCount && (
        <Typography color={isOutOfRange ? "error" : "initial"} variant="caption">
          จำนวนตัวอักษร: {value ? value.length : "0"}
        </Typography>
      )}
      <TextField
        variant="outlined"
        size="small"
        multiline
        inputRef={register}
        className={classes.mutiline}
        name={name}
        error={!!selfError}
        helperText={selfError?.message}
        {...other}
      />
    </>
  )
}

export { MultilineTypeComponent }
