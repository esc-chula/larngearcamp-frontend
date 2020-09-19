import React from "react"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  subtitle: {
    fontSize: "1.5rem"
  }
}))

const AdminDashboardModule = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <div></div>
      <Typography variant="h2" align="center">
        Admin Dashboard <span className={classes.subtitle}>ver 1.0.0</span>
      </Typography>
    </Container>
  )
}

export { AdminDashboardModule }
