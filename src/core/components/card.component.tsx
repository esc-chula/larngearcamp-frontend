import React from "react"
import { Container, Paper, ContainerProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

interface CardProps extends ContainerProps {
  padding?: number
  elevation?: number
  keepPadding?: boolean
}

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  logo: {
    margin: theme.spacing(5, 0),
    marginRight: "auto",
    marginLeft: "auto",
    width: "fit-content"
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(2)
    }
  }
}))

const CardComponent: React.FC<CardProps> = ({ padding, elevation, children, className, keepPadding = false, ...other }) => {
  const classes = useStyles()
  const paddingStyle = {
    padding: padding ? padding * 8 : 32
  }

  return (
    <Container className={`${className} ${keepPadding ? "" : classes.container}`} {...other}>
      <Paper elevation={elevation ? elevation : 0} className={classes.paper} style={paddingStyle}>
        {children}
      </Paper>
    </Container>
  )
}

export { CardComponent }
