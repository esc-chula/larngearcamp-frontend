import React from "react"
import { Switch, Redirect } from "react-router-dom"
import { UserGuardedRoute } from "../../core/guards/user.guard"
import StepRouterModule from "./stepRouter.module"
import FinishModule from "./finish.module"
import { ShowLoadingComponent } from "../../core/components/loading.component"

interface ApplicationModuleProps {
  render: boolean
}

const ApplicationModule: React.FC<ApplicationModuleProps> = ({ render }) => {
  if (!render) {
    return <ShowLoadingComponent />
  }
  return (
    <Switch>
      <UserGuardedRoute exact path="/application">
        <Redirect to="/application/step/1" />
      </UserGuardedRoute>
      <UserGuardedRoute exact path="/application/step/:step">
        <StepRouterModule />
      </UserGuardedRoute>
      <UserGuardedRoute exact path="/application/finish">
        <FinishModule />
      </UserGuardedRoute>
    </Switch>
  )
}

export default ApplicationModule
