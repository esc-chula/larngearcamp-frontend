import React from "react"
import { Switch, Route } from "react-router-dom"

// COMPONENTS
import HomeModule from "./home.module"
import RegisterModule from "./register.module"
import LoginModule from "./login.module"

const RouteModule: React.FC = () => {
  return (
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
      <Route exact path="/application"></Route>
    </Switch>
  )
}

export default RouteModule
