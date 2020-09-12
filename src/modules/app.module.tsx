import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { BrowserRouter } from "react-router-dom"
import { LoadingComponent } from "../core/components/loading.component"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "../styles/theme"
import { AuthProvider } from "../core/providers/auth.provider"
import { ErrorBoundary } from "../core/providers/error.provider"
import { GlobalProvider } from "../core/providers/global.provider"

const AppModule = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingComponent loading={true} />}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalProvider>
              <BrowserRouter>
                <RouteModule />
              </BrowserRouter>
            </GlobalProvider>
          </ThemeProvider>
        </AuthProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export { AppModule }
