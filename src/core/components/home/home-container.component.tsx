import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "160px",
      marginRight: "160px"
    },
    marginLeft: "32px",
    marginRight: "32px"
  }
}))

const HomeContainer: React.FC = props => {
  const classes = useStyle()
  return <div className={classes.container}>{props.children}</div>
}

export default HomeContainer
