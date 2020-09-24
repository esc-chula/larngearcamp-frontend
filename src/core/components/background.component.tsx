import React from "react"
import { makeStyles } from "@material-ui/core"

interface BackgroundProps {
  type: "bg1" | "bg2" | "bg3" | "bg4"
}

const useStyles = makeStyles(theme => ({
  bg: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    //backgroundImage: (type: BackgroundProps["type"]) => `url(${require(`../../assets/images/background/${type}.svg`)})`,
    backgroundImage: `url(${require("../../assets/images/background/bg1.svg")})`,
    zIndex: -1
  }
}))

const BackgroundComponent: React.FC<BackgroundProps> = ({ type }) => {
  const classes = useStyles(type)
  return <div className={classes.bg}></div>
}

export default BackgroundComponent
