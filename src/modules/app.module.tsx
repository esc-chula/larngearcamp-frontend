import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { BrowserRouter } from "react-router-dom"
import LoadingComponent from "../core/components/loading/loading.component"

const AppModule = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <BrowserRouter>
        <RouteModule />
      </BrowserRouter>
    </Suspense>
  )
}

export default AppModule
