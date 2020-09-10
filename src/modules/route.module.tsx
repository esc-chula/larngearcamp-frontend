import React from "react"
import { Switch, Route } from "react-router-dom"

// COMPONENTS
import { HomeModule } from "./home.module"
import { RegisterModule } from "./register.module"
import { LoginModule } from "./login.module"
import { NavBarComponent } from "../core/components/navbar.component"
import { UserGuardedRoute } from "../core/guards/user.guard"
import { AdminGuardedRoute } from "../core/guards/admin.guard"

const RouteModule: React.FC = () => {
  return (
    <>
      <NavBarComponent />
      <Switch>
        <Route exact path="/">
          <HomeModule />
        </Route>
        <Route exact path="/register">
          <RegisterModule />
        </Route>
        <Route exact path="/login">
          <LoginModule />
        </Route>
        <Route exact path="/qna"></Route>
        <Route exact path="/terms"></Route>
        <Route exact path="/policy"></Route>
        <UserGuardedRoute exact path="/profile"></UserGuardedRoute>
        <UserGuardedRoute exact path="/application"></UserGuardedRoute>
        <AdminGuardedRoute exact path="/admin/dashboard"></AdminGuardedRoute>
      </Switch>
    </>
  )
}

export default RouteModule
