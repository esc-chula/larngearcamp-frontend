import React from "react"
import { Route, RouteProps, Redirect } from "react-router-dom"
import { useAuthContext } from "../providers/auth.provider"

const UserGuardedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const { isUserLoggedIn } = useAuthContext()

  if (isUserLoggedIn) {
    return <Route {...props}>{children}</Route>
  }

  return <Redirect to="/login" />
}

export { UserGuardedRoute }
