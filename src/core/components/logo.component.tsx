import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { ReactComponent as LogoLongInverse } from "../../assets/images/logo/logo_long_inverse.svg"

const useStyles = makeStyles(theme => ({
  logo: {
    marginBottom: theme.spacing(3),
    marginRight: "auto",
    marginLeft: "auto",
    width: "fit-content",
    "&:after": {
      content: "initial"
    },
    "&>svg": {
      height: 70,
      [theme.breakpoints.down("sm")]: {
        height: 60
      }
    }
  }
}))

const LogoComponent: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.logo}>
      <LogoLongInverse />
    </div>
  )
}

export { LogoComponent }
