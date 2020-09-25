import { makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  wave: {
    width: "100%",
    height: "500px",
    position: "absolute",
    top: 0,
    backgroundSize: "cover",
    backgroundImage: `url(${require("../../assets/images/redWave.svg")})`,
    backgroundPosition: "center",
    zIndex: -1
  }
}))

const RedWaveComponent: React.FC = () => {
  const classes = useStyles()
  return <div className={classes.wave} />
}

export { RedWaveComponent }
