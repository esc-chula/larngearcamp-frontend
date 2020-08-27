import React from "react"
import { Switch, Route } from "react-router-dom"

// COMPONENTS
import HomeModule from "./home.module"
import RegisterModule from "./register.module"

const RouteModule: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeModule />
      </Route>
      <Route exact path="/register">
        <RegisterModule />
      </Route>
      <Route exact path="/question"></Route>
      <Route exact path="/terms"></Route>
      <Route exact path="/policy"></Route>
    </Switch>
  )
}

export default RouteModule
