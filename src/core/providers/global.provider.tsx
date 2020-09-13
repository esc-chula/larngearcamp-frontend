import React, { createContext, useContext, useState, useCallback } from "react"
import { LoadingComponent } from "../components/loading.component"
import { ModalComponent } from "../components/modal.component"

interface GlobalConstruct {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export const GlobalContext = createContext({} as GlobalConstruct)

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export const GlobalProvider: React.FC = ({ children, ...other }) => {
  const [step, setStep] = useState(1)
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleModal = useCallback(() => {
    setModal(false)
  }, [])

  const value: GlobalConstruct = { loading, setLoading, modal, setModal, step, setStep }

  return (
    <GlobalContext.Provider value={value} {...other}>
      <LoadingComponent loading={loading} />
      <ModalComponent open={modal} onClick={toggleModal} />
      {children}
    </GlobalContext.Provider>
  )
}
