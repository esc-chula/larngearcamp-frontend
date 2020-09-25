import React, { Suspense, PropsWithChildren } from "react"
import RouteModule from "./route.module"
import { BrowserRouter, useLocation } from "react-router-dom"
import { LoadingProvider, ShowLoadingComponent } from "../core/components/loading.component"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import { theme } from "../styles/theme"
import { ErrorBoundary } from "../core/providers/error.provider"
import AppProvider from "../core/providers/index.provider"
import { NavBarComponent } from "../core/components/navbar.component"
import { ScrollToTop } from "../core/components/scrollToTop.component"
import { SafeArea } from "../core/components/safeArea.component"

const useStyles = makeStyles(theme => ({
  bottomSpace: {
    height: theme.spacing(2),
    "&": {
      height: `max(${theme.spacing(2)}px, env(safe-area-inset-bottom))`
    }
  }
}))

const PageWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const location = useLocation()
  const classes = useStyles()
  const disable = location.pathname === "/"
  return (
    <>
      <SafeArea disable={disable}>{children}</SafeArea>
      {!disable && <div className={classes.bottomSpace} />}
    </>
  )
}

const AppModule = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <Suspense fallback={<ShowLoadingComponent />}>
            <AppProvider>
              <BrowserRouter>
                <ScrollToTop />
                <NavBarComponent />
                <PageWrapper>
                  <RouteModule />
                </PageWrapper>
              </BrowserRouter>
            </AppProvider>
          </Suspense>
        </LoadingProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { AppModule }
