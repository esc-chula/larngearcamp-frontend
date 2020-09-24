import React from "react"
import { Container, Paper, ContainerProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

interface CardProps extends ContainerProps {
  padding?: number
}

const useStyles = makeStyles(theme => ({
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

const CardComponent: React.FC<CardProps> = ({ padding, children, ...other }) => {
  const classes = useStyles()
  const paddingStyle = {
    padding: padding ? padding * 8 : 40
  }

  return (
    <Container {...other}>
      <Paper elevation={0} className={classes.paper} style={paddingStyle}>
        {children}
      </Paper>
    </Container>
  )
}

export { CardComponent }
