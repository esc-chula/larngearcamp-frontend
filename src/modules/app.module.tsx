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
      <ThemeProvider theme={theme}>
        <Suspense fallback={<LoadingComponent loading={true} />}>
          <AuthProvider>
            <GlobalProvider>
              <BrowserRouter>
                <RouteModule />
              </BrowserRouter>
            </GlobalProvider>
          </AuthProvider>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { AppModule }
