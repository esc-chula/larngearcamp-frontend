import { Snackbar, SnackbarProps } from "@material-ui/core"
import { Alert, AlertProps } from "@material-ui/lab"
import React from "react"

export interface CustomSnackbarProps {
  type: AlertProps["severity"]
  message: string | undefined
}

const SnackbarComponent: React.FC<CustomSnackbarProps & SnackbarProps> = ({ type, message, ...props }) => {
  return (
    <Snackbar {...props} autoHideDuration={3000}>
      <Alert severity={type} elevation={6} variant="filled">
        {message ? message : "Something went wrong."}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarComponent
