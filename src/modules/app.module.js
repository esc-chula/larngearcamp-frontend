import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import LoadingComponent from "../core/components/loading/loading.component"

import configureStore from "../redux"
import initialState from "../redux/initialState"
const store = configureStore(initialState)

const AppModule = () => {
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
