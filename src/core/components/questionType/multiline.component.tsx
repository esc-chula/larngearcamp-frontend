import React from "react"
import { StandardTextFieldProps, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useFormContext } from "react-hook-form"

const useStyles = makeStyles(theme => ({
  mutiline: {
    marginTop: theme.spacing(3),
    "&>*": {
      minHeight: 80,
      display: "flex",
      alignItems: "flex-start"
    }
  }
}))

const MultilineTypeComponent: React.FC<StandardTextFieldProps> = ({ ...other }) => {
  const classes = useStyles()
  const { register } = useFormContext()
  return <TextField variant="outlined" size="small" multiline ref={register} {...other} className={classes.mutiline} />
}

export { MultilineTypeComponent }
