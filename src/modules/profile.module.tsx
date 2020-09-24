import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { ProfileComponent } from "../core/components/profile.component"
import { Container, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { useApplicationContext } from "../core/providers/application.provider"
import { useLoadingCallback } from "../core/components/loading.component"
import { StatusInfo } from "../core/components/statusInfo.component"
import { useAuthContext } from "../core/providers/auth.provider"
import MeDTO from "../core/models/dto/me.dto"
import { ProfileStatus } from "../core/models/statusInfo.model"

const useStyles = makeStyles(theme => ({
  button: {
    color: "white",
    marginTop: theme.spacing(6),
    padding: theme.spacing(1, 4)
  },
  warning: {
    background: theme.palette.warning.main,
    "&:hover": {
      background: theme.palette.warning.dark
    }
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(4)
  },
  profile: {
    marginTop: theme.spacing(4)
  }
}))

const resolveStatus = (application: MeDTO["application"]): ProfileStatus => {
  if (!application) {
    return "start"
  }

  const { editingState, documentState, applicationState } = application

  if (editingState === "FULL") {
    return "continue"
  }
  if (applicationState === "PASSED_INTERVIEW") {
    return "passedInterview"
  }
  if (applicationState === "NOT_PASSED_INTERVIEW") {
    return "failedInterview"
  }
  if (applicationState === "PASSED_FINAL") {
    return "passedFinal"
  }
  if (applicationState === "NOT_PASSED_FINAL") {
    return "failedFinal"
  }
  if (documentState === "REVIEW") {
    return "pending"
  }
  if (documentState === "PASSED") {
    return "docOk"
  }
  return "docNotOk"
}

const ProfileModule = () => {
  const classes = useStyles()
  const { createApplication } = useApplicationContext()
  const { me } = useAuthContext()
  const { application } = me.data as MeDTO

  const profileStatus = resolveStatus(application)

  const initApplication = useLoadingCallback(
    useCallback(async () => {
      try {
        await createApplication()
      } catch (error) {}
    }, [createApplication])
  )

  return (
    <Container maxWidth="lg">
      <ProfileComponent className={classes.profile} />
      <Link to="/application/step/1" onClick={initApplication} className="no-underline">
        <Button className={classes.button} color="primary" variant="contained" fullWidth>
          สมัครเข้าค่าย
        </Button>
      </Link>

      <Button className={`${classes.button} ${classes.warning}`} variant="contained" fullWidth>
        แก้ไขข้อมูลส่วนตัวผู้สมัคร (ส่วนที่ 2)
      </Button>
      <StatusInfo profileStatus={profileStatus} />
    </Container>
  )
}

export { ProfileModule }
