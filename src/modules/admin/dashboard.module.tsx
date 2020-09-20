import React from "react"
import { Container, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SearchComponent } from "../../core/components/search.component"
import { UserTableComponent } from "../../core/components/userTable.component"

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: "3rem",
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: { fontSize: "2rem" }
  },
  subtitle: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: { fontSize: "1rem" }
  },
  paper: {
    padding: theme.spacing(4)
  }
}))

const AdminDashboardModule = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" className={classes.title}>
        Admin Dashboard <span className={classes.subtitle}>ver 1.0.0</span>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="body1" color="primary">
              จำนวนผู้สมัครทั้งหมด
            </Typography>
            <Typography variant="h4">104 คน</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="body1" color="primary">
              จำนวนผู้สมัครที่รอตรวจเอกสาร
            </Typography>
            <Typography variant="h4">14 คน</Typography>
          </Paper>
        </Grid>
      </Grid>

      <SearchComponent />
      <UserTableComponent />
    </Container>
  )
}

export { AdminDashboardModule }
