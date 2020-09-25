import React, { createContext, useContext, useState, useCallback } from "react"
import SnackbarComponent, { CustomSnackbarProps } from "../components/snackbar.component"

interface GlobalConstruct {
  activeSnackBar: (props: CustomSnackbarProps) => void
}

export const GlobalContext = createContext({} as GlobalConstruct)

export const useGlobalContext = () => useContext(GlobalContext)

let currentSnackbarId = 0

export const GlobalProvider: React.FC = ({ children, ...other }) => {
  const [snackbars, setSnackbars] = useState<Record<string, CustomSnackbarProps>>({})

  const activeSnackBar = useCallback((props: CustomSnackbarProps) => {
    setSnackbars(snackbars => ({ ...snackbars, [`${++currentSnackbarId}`]: props }))
  }, [])

  const removeSnackbar = useCallback((snackbarId: string) => {
    setSnackbars(snackbars => {
      const newSnackbars: Record<string, CustomSnackbarProps> = {}
      Object.keys(snackbars).forEach(id => {
        if (id !== snackbarId) {
          newSnackbars[id] = snackbars[id]
        }
      })
      return newSnackbars
    })
  }, [])

  const value: GlobalConstruct = { activeSnackBar }
  return (
    <GlobalContext.Provider value={value} {...other}>
      {Object.keys(snackbars).map(id => {
        const snackbar = snackbars[id]
        return <SnackbarComponent key={id} id={id} {...snackbar} removeSnackbar={removeSnackbar} />
      })}
      {children}
    </GlobalContext.Provider>
  )
}
