import React from "react"
import { makeStyles } from "@material-ui/core"

interface BackgroundProps {
  type: "bg1" | "bg2" | "bg3" | "bg4"
}

const useStyles = makeStyles(theme => ({
  bg: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    zIndex: -1
  },
  bg1: { backgroundImage: `url(${require("../../assets/images/background/bg1.svg")})` },
  bg2: { backgroundImage: `url(${require("../../assets/images/background/bg2.svg")})` },
  bg3: { backgroundImage: `url(${require("../../assets/images/background/bg3.svg")})` },
  bg4: { backgroundImage: `url(${require("../../assets/images/background/bg4.svg")})` }
}))

const BackgroundComponent: React.FC<BackgroundProps> = ({ type }) => {
  const classes = useStyles(type)
  return <div className={`${classes.bg} ${classes[type]}`}></div>
}

export default BackgroundComponent
