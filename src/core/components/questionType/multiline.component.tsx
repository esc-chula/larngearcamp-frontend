import React from "react"
import { StandardTextFieldProps, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useFormContext } from "react-hook-form"
import { resolve } from "../../../utils/other"

const useStyles = makeStyles(theme => ({
  mutiline: {
    marginTop: theme.spacing(3),
    "&>*:not(p)": {
      minHeight: 80,
      display: "flex",
      alignItems: "flex-start"
    }
  }
}))

const MultilineTypeComponent: React.FC<StandardTextFieldProps & { name: string }> = ({ name, ...other }) => {
  const classes = useStyles()
  const { register, errors } = useFormContext()
  const selfError = resolve(name, errors)
  return (
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
  )
}

export { MultilineTypeComponent }
