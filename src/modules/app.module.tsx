import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { BrowserRouter } from "react-router-dom"
import { LoadingComponent } from "../core/components/loading.component"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "../styles/theme"

const AppModule = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RouteModule />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  )
}

export { AppModule }
