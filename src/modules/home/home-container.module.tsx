import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
  container: {
    display: "grid",
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "minmax(0px, 160px) auto minmax(0px, 160px)"
    },
    gridTemplateColumns: "minmax(0px, 32px) auto minmax(0px, 32px)"
  }
}))

export interface HomeContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomeContainer: React.FC<HomeContainerProps> = props => {
  const classes = useStyle()
  return (
    <div {...props} className={`${classes.container} ${props.className}`}>
      <span />
      <span>{props.children}</span>
      <span />
    </div>
  )
}

export default HomeContainer
