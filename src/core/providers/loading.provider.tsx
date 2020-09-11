import React, { createContext, useContext, useState } from "react"
import { LoadingComponent } from "../components/loading.component"

interface LoadingConstruct {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext({} as LoadingConstruct)

export const useLoadingContext = () => {
  return useContext(AuthContext)
}

export const LoadingProvider: React.FC = ({ children, ...other }) => {
  const [loading, setLoading] = useState(false)

  const value: LoadingConstruct = { loading, setLoading }

  return (
    <AuthContext.Provider value={value} {...other}>
      <LoadingComponent loading={loading} />
      {children}
    </AuthContext.Provider>
  )
}
