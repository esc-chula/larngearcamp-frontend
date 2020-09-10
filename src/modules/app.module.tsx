import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { BrowserRouter } from "react-router-dom"
import { LoadingComponent } from "../core/components/loading.component"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "../styles/theme"
import { AuthProvider } from "../core/providers/auth.provider"

const AppModule = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <RouteModule />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </Suspense>
  )
}

export { AppModule }
