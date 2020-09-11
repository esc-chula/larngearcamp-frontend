import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import HashLoader from "react-spinners/HashLoader"
import { Backdrop } from "@material-ui/core"

interface LoadingProps {
  loading: boolean
}

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    background: "rgba(0,0,0,0.35)"
  }
}))

const LoadingComponent: React.FC<LoadingProps> = ({ loading }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Backdrop className={classes.backdrop} open={loading} transitionDuration={500}>
      <HashLoader size={100} color={theme.palette.primary.main} />
    </Backdrop>
  )
}

export { LoadingComponent }
