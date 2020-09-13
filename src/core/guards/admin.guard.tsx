import React from "react"
import { Route, RouteProps, Redirect } from "react-router-dom"
import { useAuthContext } from "../providers/auth.provider"

const AdminGuardedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const { isAdminLoggedIn } = useAuthContext()

  if (isAdminLoggedIn) {
    return <Route {...props}>{children}</Route>
  }

  return <Redirect to="/login" />
}

export { AdminGuardedRoute }
