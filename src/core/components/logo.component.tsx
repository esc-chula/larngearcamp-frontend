import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { ReactComponent as LogoInverse } from "../../assets/images/logo/logo_inverse.svg"

const useStyles = makeStyles(theme => ({
  logo: {
    display: "flex",
    flexDirection:"row",
    alignItems : "center",
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
  },text: {
    fontSize : 30,
    color : "white",
    fontWeight : "bold",
    userSelect: "none"
  }
}))

const LogoComponent: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.logo}>
      <LogoInverse /> <span className = {classes.text}>Larngear Camp 22nd </span>
    </div>
  )
}

export { LogoComponent }
