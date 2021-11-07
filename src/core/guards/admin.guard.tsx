import React from "react"
import { Route, RouteProps, Redirect } from "react-router-dom"

const AdminGuardedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  return (
    <Route {...props}>
      <Redirect to="/login" />
    </Route>
  )
}

export { AdminGuardedRoute }
