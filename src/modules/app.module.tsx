import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { BrowserRouter } from "react-router-dom"
import { LoadingComponent } from "../core/components/loading.component"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "../styles/theme"
import { ErrorBoundary } from "../core/providers/error.provider"
import AppProvider from "../core/providers/index.provider"

const AppModule = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<LoadingComponent loading={true} />}>
          <AppProvider>
            <BrowserRouter>
              <RouteModule />
            </BrowserRouter>
          </AppProvider>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { AppModule }
