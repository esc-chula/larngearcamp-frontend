import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { BrowserRouter } from "react-router-dom"
import { LoadingProvider, ShowLoadingComponent } from "../core/components/loading.component"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "../styles/theme"
import { ErrorBoundary } from "../core/providers/error.provider"
import AppProvider from "../core/providers/index.provider"

const AppModule = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <Suspense fallback={<ShowLoadingComponent />}>
            <AppProvider>
              <BrowserRouter>
                <RouteModule />
              </BrowserRouter>
            </AppProvider>
          </Suspense>
        </LoadingProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { AppModule }
