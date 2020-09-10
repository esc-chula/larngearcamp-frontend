import React from "react"
import { Route, RouteProps, Redirect } from "react-router-dom"
import { useAuthContext } from "../providers/auth.provider"

const AdminGuardedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const { isAdminLogin } = useAuthContext()

  if (isAdminLogin()) {
    return <Route {...props}>{children}</Route>
  }

  return <Redirect to="/login" />
}

export { AdminGuardedRoute }
