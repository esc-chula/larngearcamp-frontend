import React, { useState, useContext } from "react"

interface DialogContextValue {
  paymentDialog: boolean
  shirtSizeDialog: boolean
  openPaymentDialog: () => void
  closePaymentDialog: () => void
  openShirtSizeDialog: () => void
  closeShirtSizeDialog: () => void
}

const DialogContext = React.createContext({
  paymentDialog: false,
  shirtSizeDialog: false,
  openPaymentDialog: () => {},
  closePaymentDialog: () => {},
  openShirtSizeDialog: () => {},
  closeShirtSizeDialog: () => {}
} as DialogContextValue)

export const useDialogContext = () => useContext(DialogContext)

export const DialogProvider: React.FC = ({ children }) => {
  const [paymentDialog, setPaymentDialog] = useState(false)
  const [shirtSizeDialog, setShirtSizeDialog] = useState(false)

  const openPaymentDialog = () => {
    setPaymentDialog(true)
  }

  const closePaymentDialog = () => {
    setPaymentDialog(false)
  }

  const openShirtSizeDialog = () => {
    setShirtSizeDialog(true)
  }

  const closeShirtSizeDialog = () => {
    setShirtSizeDialog(false)
  }

  return (
    <DialogContext.Provider
      value={{
        paymentDialog,
        shirtSizeDialog,
        openPaymentDialog,
        closePaymentDialog,
        openShirtSizeDialog,
        closeShirtSizeDialog
      }}>
      {children}
    </DialogContext.Provider>
  )
}
