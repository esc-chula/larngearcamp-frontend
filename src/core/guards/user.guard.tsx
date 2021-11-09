import React from "react"
import { Route, RouteProps, Redirect } from "react-router-dom"
import { ShowLoadingComponent } from "../components/loading.component"
import { useAuthContext } from "../providers/auth.provider"

const UserGuardedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const { isLoggedIn, isReady } = useAuthContext()

  if (!isReady) {
    return <ShowLoadingComponent />
  }

  if (isLoggedIn) {
    return <Route {...props}>{children}</Route>
  }
  return (
    <Route {...props}>
      <Redirect to="/login" />
    </Route>
  )
}

export { UserGuardedRoute }
