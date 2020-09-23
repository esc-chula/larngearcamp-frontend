import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { BrowserRouter } from "react-router-dom"
import { LoadingComponent } from "../core/components/loading.component"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "../styles/theme"
import { ErrorBoundary } from "../core/providers/error.provider"
import AppProvider from "../core/providers/index.provider"
import AppService from "../core/services/index.service"

const AppModule = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<LoadingComponent loading={true} />}>
          <AppService>
            <AppProvider>
              <BrowserRouter>
                <RouteModule />
              </BrowserRouter>
            </AppProvider>
          </AppService>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { AppModule }
