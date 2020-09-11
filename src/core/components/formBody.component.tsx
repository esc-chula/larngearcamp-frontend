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
    }
  }
}))

const FormBodyComponent: React.FC<ContainerProps> = ({ maxWidth, children }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.logo}>Logo</div>
      <Container maxWidth={maxWidth}>
        <Paper elevation={0} className={classes.paper}>
          {children}
        </Paper>
      </Container>
    </>
  )
}

export { FormBodyComponent }
