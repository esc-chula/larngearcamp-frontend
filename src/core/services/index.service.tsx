import React from "react"
import { AuthServiceProvider } from "./auth.service"
import { UserServiceProvider } from "./users.service"
import { ApplicationServiceProvider } from "./application.service"

const AppService: React.FC = ({ children }) => {
  return (
    <AuthServiceProvider>
      <UserServiceProvider>
        <ApplicationServiceProvider>{children}</ApplicationServiceProvider>
      </UserServiceProvider>
    </AuthServiceProvider>
  )
}

export default AppService
