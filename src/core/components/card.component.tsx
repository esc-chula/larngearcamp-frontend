import React from "react"
import { Container, Paper, ContainerProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  logo: {
    margin: theme.spacing(5, 0),
    marginRight: "auto",
    marginLeft: "auto",
    width: "fit-content"
  },
  paper: {
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2)
    },
    "&:last-child": {
      marginBottom: theme.spacing(0)
    }
  }
}))

const CardComponent: React.FC<ContainerProps> = ({ children, ...other }) => {
  const classes = useStyles()

  return (
    <>
      <Container {...other}>
        <Paper elevation={0} className={classes.paper}>
          {children}
        </Paper>
      </Container>
    </>
  )
}

export { CardComponent }
