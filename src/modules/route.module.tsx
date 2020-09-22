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
import { StepRouter, Finish } from "./applications"
import { GuestGuardedRoute } from "../core/guards/guest.guard"
import { NotFoundModule } from "./notfound.module"
import { AdminDashboardModule } from "./admin/dashboard.module"
import { QandAModule } from "./qna.module"
import { ForgotPasswordModule } from "./forgotpassword.module"
import { Box } from "@material-ui/core"
import { ResetPasswordModule } from "./resetpassword.module"

const RouteModule: React.FC = () => {
  return (
    <>
      <NavBarComponent />
      <Switch>
        {/* No Guard */}
        <Route exact path="/">
          <HomeModule />
        </Route>
        <Route exact path="/qna">
          <QandAModule />
        </Route>

        {/* Guest Guard */}
        <GuestGuardedRoute exact path="/login">
          <LoginModule />
        </GuestGuardedRoute>
        <GuestGuardedRoute exact path="/register">
          <RegisterModule />
        </GuestGuardedRoute>
        <GuestGuardedRoute exact path="/forgot-password">
          <ForgotPasswordModule />
        </GuestGuardedRoute>
        <GuestGuardedRoute exact path="/reset-password">
          <ResetPasswordModule />
        </GuestGuardedRoute>

        {/* User Guard */}
        <UserGuardedRoute exact path="/profile">
          <ProfileModule />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application">
          <Redirect to="/application/step/1" />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step/:step">
          <StepRouter />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/finish">
          <Box my={3} />
          <Finish />
        </UserGuardedRoute>

        {/* Admin Guard */}
        <AdminGuardedRoute exact path="/admin/dashboard">
          <AdminDashboardModule />
        </AdminGuardedRoute>
        <AdminGuardedRoute exact path="/admin/dashboard/:id"></AdminGuardedRoute>

        {/* NotFound Route */}
        <Route>
          <NotFoundModule />
        </Route>
      </Switch>
    </>
  )
}

export default RouteModule
