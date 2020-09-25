import React, { useEffect, useState, createContext, useContext, PropsWithChildren, useCallback } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import HashLoader from "react-spinners/HashLoader"
import { Backdrop } from "@material-ui/core"

interface LoadingContextValue {
  setLoadingCount: React.Dispatch<React.SetStateAction<number>>
}

const LoadingContext = createContext({} as LoadingContextValue)

interface LoadingProps {
  loading?: boolean
}

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.tooltip + 1,
    background: "rgba(0,0,0,0.35)"
  }
}))

function useLoadingStatus(initialLoading: boolean = false) {
  const [loading, setLoading] = useState(initialLoading)
  const { setLoadingCount } = useContext(LoadingContext)
  useEffect(() => {
    if (loading) {
      setLoadingCount(count => count + 1)
      return () => setLoadingCount(count => count - 1)
    }
  }, [loading, setLoadingCount])
  return setLoading
}

function useLoadingCallback<T extends never[], R>(func: (...args: T) => Promise<R>) {
  const setLoading = useLoadingStatus()
  return useCallback(
    async (...args: T) => {
      try {
        setLoading(true)
        return await func(...args)
      } finally {
        setLoading(false)
      }
    },
    [func, setLoading]
  )
}

const ShowLoadingComponent: React.FC<LoadingProps> = ({ loading = true }) => {
  useLoadingStatus(loading)
  return null
}

const LoadingComponent: React.FC<LoadingProps> = ({ loading = true }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Backdrop className={classes.backdrop} open={loading} transitionDuration={500}>
      <HashLoader size={80} color={theme.palette.primary.main} />
    </Backdrop>
  )
}

const LoadingProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0)
  return (
    <LoadingContext.Provider value={{ setLoadingCount }}>
      <LoadingComponent loading={loadingCount > 0} />
      {children}
    </LoadingContext.Provider>
  )
}

export { LoadingProvider, useLoadingStatus, useLoadingCallback, ShowLoadingComponent }
