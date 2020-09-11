import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

// COMPONENTS
import { HomeModule } from "./home.module"
import { RegisterModule } from "./register.module"
import { LoginModule } from "./login.module"
import { NavBarComponent } from "../core/components/navbar.component"
import { UserGuardedRoute } from "../core/guards/user.guard"
import { AdminGuardedRoute } from "../core/guards/admin.guard"
import { ProfileModule } from "./profile.module"
import { Step1, Step2, Step3, Step4, Step5, Step6 } from "./applications"
import { GuestGuardedRoute } from "../core/guards/guest.guard"

const RouteModule: React.FC = () => {
  return (
    <>
      <NavBarComponent />
      <Switch>
        {/* No Guard */}
        <Route exact path="/">
          <HomeModule />
        </Route>
        <Route exact path="/qna"></Route>

        {/* Guest Guard */}
        <GuestGuardedRoute exact path="/login">
          <LoginModule />
        </GuestGuardedRoute>
        <GuestGuardedRoute exact path="/register">
          <RegisterModule />
        </GuestGuardedRoute>

        {/* User Guard */}
        <UserGuardedRoute exact path="/profile">
          <ProfileModule />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application">
          <Redirect to="/application/step1" />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step1">
          <Step1 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step2">
          <Step2 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step3">
          <Step3 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step4">
          <Step4 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step5">
          <Step5 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step6">
          <Step6 />
        </UserGuardedRoute>

        {/* Admin Guard */}
        <AdminGuardedRoute exact path="/admin/dashboard"></AdminGuardedRoute>
      </Switch>
    </>
  )
}

export default RouteModule
