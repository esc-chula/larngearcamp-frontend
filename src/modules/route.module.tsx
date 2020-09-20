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
import { Finish, Step1, Step2, Step3, Step4, Step5, Step6 } from "./applications"
import { GuestGuardedRoute } from "../core/guards/guest.guard"
import { NotFoundModule } from "./notfound.module"
import { NavigatorComponent } from "../core/components/navigator.component"
import { AdminDashboardModule } from "./admin/dashboard.module"
import { QandAModule } from "./qna.module"
import { ForgotPasswordModule } from "./forgotpassword.module"

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
        <GuestGuardedRoute exact path="/forgotpassword">
          <ForgotPasswordModule />
        </GuestGuardedRoute>

        {/* User Guard */}
        <UserGuardedRoute exact path="/profile">
          <ProfileModule />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application">
          <Redirect to="/application/step1" />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step1">
          <NavigatorComponent />
          <Step1 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step2">
          <NavigatorComponent />
          <Step2 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step3">
          <NavigatorComponent />
          <Step3 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step4">
          <NavigatorComponent />
          <Step4 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step5">
          <NavigatorComponent />
          <Step5 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/step6">
          <NavigatorComponent />
          <Step6 />
        </UserGuardedRoute>
        <UserGuardedRoute exact path="/application/finish">
          <NavigatorComponent />
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
