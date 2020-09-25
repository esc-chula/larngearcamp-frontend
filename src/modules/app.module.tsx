import React, { Suspense } from "react"
import RouteModule from "./route.module"
import { BrowserRouter, useLocation } from "react-router-dom"
import { LoadingProvider, ShowLoadingComponent } from "../core/components/loading.component"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import { theme } from "../styles/theme"
import { ErrorBoundary } from "../core/providers/error.provider"
import AppProvider from "../core/providers/index.provider"
import { NavBarComponent } from "../core/components/navbar.component"

const useStyles = makeStyles(theme => ({
  bottomSpace: {
    height: theme.spacing(2)
  }
}))

const BottomSpace = () => {
  const location = useLocation()
  const classes = useStyles()
  if (location.pathname === "/") {
    return null
  }
  return <div className={classes.bottomSpace} />
}

const AppModule = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <Suspense fallback={<ShowLoadingComponent />}>
            <AppProvider>
              <BrowserRouter>
                <NavBarComponent />
                <RouteModule />
                <BottomSpace />
              </BrowserRouter>
            </AppProvider>
          </Suspense>
        </LoadingProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { AppModule }
