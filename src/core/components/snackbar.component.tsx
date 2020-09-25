import { Snackbar, SnackbarProps } from "@material-ui/core"
import { Alert, AlertProps } from "@material-ui/lab"
import React, { useCallback, useState } from "react"

export interface CustomSnackbarProps {
  type: AlertProps["severity"]
  message: string | undefined
}

export type SnackbarComponentProps = CustomSnackbarProps &
  SnackbarProps & {
    id: string
    removeSnackbar: (id: string) => void
  }

const SnackbarComponent: React.FC<SnackbarComponentProps> = ({ type, message, id, removeSnackbar, ...props }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleExited = useCallback(() => {
    removeSnackbar(id)
  }, [id, removeSnackbar])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <Snackbar {...props} autoHideDuration={3000} onExited={handleExited} onClose={handleClose} open={isOpen}>
      <Alert severity={type} elevation={6} variant="filled">
        {message ? message : "มีบางอย่างผิดพลาด"}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarComponent
