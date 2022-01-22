import React, { useState, useContext } from "react"

interface DialogContextValue {
  isOpen: boolean
  openDialog: () => void
  closeDialog: () => void
}

const DialogContext = React.createContext({
  isOpen: false,
  openDialog: () => {},
  closeDialog: () => {}
} as DialogContextValue)

export const useDialogContext = () => useContext(DialogContext)

export const DialogProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  return <DialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>{children}</DialogContext.Provider>
}
