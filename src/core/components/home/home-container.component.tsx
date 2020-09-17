import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
  container: {
    display: 'grid',
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "minmax(0px, 160px) auto minmax(0px, 160px)",
    },
    gridTemplateColumns: "minmax(0px, 32px) auto minmax(0px, 32px)",
  }
}))

const HomeContainer: React.FC = props => {
  const classes = useStyle();
  return (
  <div className={classes.container}>
    <span/>
    <span>{props.children}</span>
    <span/>
  </div>
  )
}

export default HomeContainer
