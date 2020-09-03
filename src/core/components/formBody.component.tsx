import React from "react"
import { Container, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

interface Props {
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl"
}

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

const FormBodyComponent: React.FC<Props> = ({ maxWidth, children }) => {
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
