import React from "react"
import { AuthProvider } from "./auth.provider"
import { GlobalProvider } from "./global.provider"
import { ApplicationProvider } from "./application.provider"
import { AnnounceProvider } from "./announce.provider"

const AppProvider: React.FC = ({ children }) => {
  return (
    <AnnounceProvider>
      <GlobalProvider>
        <AuthProvider>
          <ApplicationProvider>{children}</ApplicationProvider>
        </AuthProvider>
      </GlobalProvider>
    </AnnounceProvider>
  )
}

export default AppProvider
