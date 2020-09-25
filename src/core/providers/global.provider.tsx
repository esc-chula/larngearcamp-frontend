import React, { createContext, useContext, useState, useCallback } from "react"
import SnackbarComponent, { CustomSnackbarProps } from "../components/snackbar.component"

interface GlobalConstruct {
  activeSnackBar: (props: CustomSnackbarProps) => void
}

export const GlobalContext = createContext({} as GlobalConstruct)

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider: React.FC = ({ children, ...other }) => {
  const [open, setOpen] = useState(false)
  const [snackbar, setSnackbar] = useState<CustomSnackbarProps>()

  const activeSnackBar = useCallback((props: CustomSnackbarProps) => {
    setSnackbar(props)
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const value: GlobalConstruct = { activeSnackBar }
  return (
    <GlobalContext.Provider value={value} {...other}>
      <SnackbarComponent message={snackbar?.message} type={snackbar?.type} onClose={handleClose} open={open} />
      {children}
    </GlobalContext.Provider>
  )
}
