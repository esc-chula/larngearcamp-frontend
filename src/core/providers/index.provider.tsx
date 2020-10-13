import React from "react"
import { AuthProvider } from "./auth.provider"
import { GlobalProvider } from "./global.provider"
import { ApplicationProvider } from "./application.provider"

const AppProvider: React.FC = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <ApplicationProvider>{children}</ApplicationProvider>
      </AuthProvider>
    </GlobalProvider>
  )
}

export default AppProvider
