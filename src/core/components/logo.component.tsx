import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  logo: {
    margin: theme.spacing(5, 0),
    marginRight: "auto",
    marginLeft: "auto",
    width: "fit-content"
  }
}))

const LogoComponent: React.FC = () => {
  const classes = useStyles()

  return <div className={classes.logo}>Logo</div>
}

export { LogoComponent }
