import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { ReactComponent as LogoInverse } from "../../assets/images/logo/logo_inverse_without_text.svg"

const useStyles = makeStyles(theme => ({
  logo: {
    minWidth: 354,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    marginRight: "auto",
    marginLeft: "auto",
    width: "fit-content",
    "&:after": {
      content: "initial"
    },
    "&>svg": {
      height: 70,
      width: "auto",
      [theme.breakpoints.down("sm")]: {
        height: 60
      }
    }
  },
  text: {
    display: "inline",
    fontSize: "27px",
    color: "white",
    fontWeight: "bold",
    overflow: "hidden",
    userSelect: "none",
    marginLeft: theme.spacing(3)
  }
}))

const LogoComponent: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.logo}>
      <LogoInverse /> <span className={classes.text}>Larngear Camp {process.env.REACT_APP_CAMP_YEAR}th </span>
    </div>
  )
}

export { LogoComponent }
