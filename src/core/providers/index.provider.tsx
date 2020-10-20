import React from "react"
import { AuthProvider } from "./auth.provider"
import { GlobalProvider } from "./global.provider"
import { ApplicationProvider } from "./application.provider"
import { ShutdownProvider } from "./shutdown.provider"

const AppProvider: React.FC = ({ children }) => {
  return (
    <ShutdownProvider>
      <GlobalProvider>
        <AuthProvider>
          <ApplicationProvider>{children}</ApplicationProvider>
        </AuthProvider>
      </GlobalProvider>
    </ShutdownProvider>
  )
}

export default AppProvider
