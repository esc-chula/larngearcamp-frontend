import React from "react"
import { StandardTextFieldProps, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useFormContext } from "react-hook-form"
import { resolve } from "../../../utils/modify"
import { log } from "console"
import { wordCount } from "../../../utils/wordcount"

interface MultiLineTypeProps {
  name: string
}

const useStyles = makeStyles(theme => ({
  multiline: {
    "&>*:not(p)": {
      minHeight: 80,
      display: "flex",
      alignItems: "flex-start"
    }
  }
}))

const MultilineTypeComponent: React.FC<StandardTextFieldProps & MultiLineTypeProps> = ({ name, ...other }) => {
  const classes = useStyles()
  const { register, errors } = useFormContext()
  const selfError = resolve(name, errors)
  let count = 0
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    count = wordCount(event.target.value)
    console.log(count)
  }
  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        multiline
        inputRef={register}
        className={classes.multiline}
        name={name}
        error={!!selfError}
        helperText={selfError?.message}
        {...other}
        onChange={handleChange}
      />
      <span>Count: {count}</span>
    </>
  )
}

export { MultilineTypeComponent }
