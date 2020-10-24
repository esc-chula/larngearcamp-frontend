import React, { useMemo } from "react"
import { Container, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SearchComponent } from "../../core/components/search.component"
import { UserTableComponent } from "../../core/components/userTable.component"
import { useAdminContext } from "../../core/providers/admin.provider"
import UserDisplayDataComponent from "../../core/components/userDisplayData.component"

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
  },
  mt: {
    marginTop: theme.spacing(2)
  }
}))

const AdminDashboardModule = () => {
  const classes = useStyles()
  const { selectedUser, modifiedUsersData, applicationProfilePart, applicationAnswerPart, applicationDocumentPart } = useAdminContext()
  const waitForReview = useMemo(() => modifiedUsersData?.filter(value => value.documentStatus === "REVIEW").length, [modifiedUsersData])

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
            <Typography variant="h4">{!!modifiedUsersData ? `${modifiedUsersData?.length} คน` : "0 คน"}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="body1" color="primary">
              จำนวนผู้สมัครที่รอตรวจเอกสาร
            </Typography>
            <Typography variant="h4">{waitForReview}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <SearchComponent />
      <UserTableComponent usersData={modifiedUsersData} />
      <div id="userdata">
        {!!selectedUser && (
          <>
            <Paper className={`${classes.paper} ${classes.mt}`}>
              <Grid container spacing={2}>
                {applicationProfilePart?.map((props, index) => (
                  <UserDisplayDataComponent {...props} key={index} />
                ))}
              </Grid>
            </Paper>
            <Paper className={`${classes.paper} ${classes.mt}`}>
              <Grid container spacing={2}>
                {applicationAnswerPart?.map((props, index) => (
                  <UserDisplayDataComponent {...props} key={index} />
                ))}
              </Grid>
            </Paper>
            <Paper className={`${classes.paper} ${classes.mt}`}>
              <Grid container spacing={2}>
                {applicationDocumentPart?.map((props, index) => (
                  <UserDisplayDataComponent {...props} key={index} />
                ))}
              </Grid>
            </Paper>
          </>
        )}
      </div>
    </Container>
  )
}

export { AdminDashboardModule }
