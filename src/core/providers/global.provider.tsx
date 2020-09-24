import React, { createContext, useContext, useState, useCallback } from "react"
import { ModalComponent } from "../components/modal.component"

interface GlobalConstruct {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext({} as GlobalConstruct)

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider: React.FC = ({ children, ...other }) => {
  const [modal, setModal] = useState(false)

  const toggleModal = useCallback(() => {
    setModal(false)
  }, [])

  const value: GlobalConstruct = { modal, setModal }

  return (
    <GlobalContext.Provider value={value} {...other}>
      <ModalComponent open={modal} onClick={toggleModal} />
      {children}
    </GlobalContext.Provider>
  )
}
