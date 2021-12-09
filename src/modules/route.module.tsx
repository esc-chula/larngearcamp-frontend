import React, { Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

// COMPONENTS
import { HomeModule } from "./home.module"
import { LoginModule } from "./login.module"
import { UserGuardedRoute } from "../core/guards/user.guard"
import { ProfileModule } from "./profile.module"
import { GuestGuardedRoute } from "../core/guards/guest.guard"
import { NotFoundModule } from "./notfound.module"
import { FAQModule } from "./faq.module"
import { ApplicationStateProvider } from "../core/providers/applicationState.provider"
import { ShowLoadingComponent } from "../core/components/loading.component"
import { DocModule } from "./doc.module"
import { ApplicationStatus, useAnnounceContext } from "../core/providers/announce.provider"
import { PrivacyPoflicyModule } from "./privacy-policy.module"

const ApplicationModule = React.lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "application-module" */ "./applications"))

const RouteModule: React.FC = () => {
  const { state } = useAnnounceContext()

  return (
    <Suspense fallback={<ShowLoadingComponent />}>
      <Switch>
        {/* No Guard */}
        <Route exact path="/">
          <HomeModule />
        </Route>
        <Route exact path="/faq">
          <FAQModule />
        </Route>
        <Route exact path="/docs">
          <DocModule />
        </Route>
        <Route exact path="/privacy">
          <PrivacyPoflicyModule />
        </Route>
        {/* <Route exact path="/tos">
          <TosModule />
        </Route> */}

        {/* Guest Guard */}
        <GuestGuardedRoute exact path="/login">
          <LoginModule />
        </GuestGuardedRoute>

        {/* User Guard */}
        <UserGuardedRoute exact path="/profile">
          <ApplicationStateProvider>{(render, is404) => (render || is404 ? <ProfileModule /> : <ShowLoadingComponent />)}</ApplicationStateProvider>
        </UserGuardedRoute>
        <UserGuardedRoute path="/application">
          {state === ApplicationStatus.EARLY || state === ApplicationStatus.LATE ? (
            <Redirect to="/profile" />
          ) : (
            <ApplicationStateProvider>{render => <ApplicationModule render={render} />}</ApplicationStateProvider>
          )}
        </UserGuardedRoute>

        {/* NotFound Route */}
        <Route>
          <NotFoundModule />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default RouteModule
