import React, { Suspense } from "react"
import { Switch, Route } from "react-router-dom"

// COMPONENTS
import { HomeModule } from "./home.module"
import { RegisterModule } from "./register.module"
import { LoginModule } from "./login.module"
import { UserGuardedRoute } from "../core/guards/user.guard"
import { AdminGuardedRoute } from "../core/guards/admin.guard"
import { ProfileModule } from "./profile.module"
import { GuestGuardedRoute } from "../core/guards/guest.guard"
import { NotFoundModule } from "./notfound.module"
import { AdminDashboardModule } from "./admin/dashboard.module"
import { QandAModule } from "./qna.module"
import { ForgotPasswordModule } from "./forgotpassword.module"
import { ResetPasswordModule } from "./resetpassword.module"
import { ApplicationStateProvider } from "../core/providers/applicationState.provider"
import { ShowLoadingComponent } from "../core/components/loading.component"
import { DocModule } from "./doc.module"

const ApplicationModule = React.lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "application-module" */ "./applications"))

const RouteModule: React.FC = () => {
  return (
    <Suspense fallback={<ShowLoadingComponent />}>
      <Switch>
        {/* No Guard */}
        <Route exact path="/">
          <HomeModule />
        </Route>
        <Route exact path="/qna">
          <QandAModule />
        </Route>
        <Route exact path="/docs">
          <DocModule />
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
          <ApplicationStateProvider>{(render, is404) => (render || is404 ? <ProfileModule /> : <ShowLoadingComponent />)}</ApplicationStateProvider>
        </UserGuardedRoute>
        <UserGuardedRoute path="/application">
          <ApplicationStateProvider>{render => <ApplicationModule render={render} />}</ApplicationStateProvider>
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
    </Suspense>
  )
}

export default RouteModule
