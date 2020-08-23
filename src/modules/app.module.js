import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import LoadingComponent from "../core/components/loading/loading.component"

import store from "../redux"

function AppModule() {
  return (
    <Provider store={store}>
      <Suspense fallback={<LoadingComponent />}>
        <BrowserRouter>
          <RouteModule />
        </BrowserRouter>
      </Suspense>
    </Provider>
  )
}

export default AppModule
