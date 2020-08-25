import React from "react"
import { Switch, Route } from "react-router-dom"

// COMPONENTS
import SampleComponent from "../core/components/sample/sample.component"

const RouteModule: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SampleComponent />
      </Route>
      <Route exact path="/register"></Route>
      <Route exact path="/question"></Route>
      <Route exact path="/terms"></Route>
      <Route exact path="/policy"></Route>
    </Switch>
  )
}

export default RouteModule
