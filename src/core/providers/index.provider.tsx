import React from "react"
import { AuthProvider } from "./auth.provider"
import { GlobalProvider } from "./global.provider"
import { ApplicationProvider } from "./application.provider"
import { UserProvider } from "./user.provider"

const AppProvider: React.FC = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <UserProvider>
          <ApplicationProvider>{children}</ApplicationProvider>
        </UserProvider>
      </AuthProvider>
    </GlobalProvider>
  )
}

export default AppProvider
