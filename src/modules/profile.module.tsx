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
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"

const useStyles = makeStyles(theme => ({
  button: {
    color: "white",
    marginTop: theme.spacing(4),
    padding: theme.spacing(1, 4)
  },
  warning: {
    background: theme.palette.warning.main,
    "&:hover": {
      background: theme.palette.warning.dark
    }
  },
  success: {
    background: theme.palette.success.main,
    "&:hover": {
      background: theme.palette.success.dark
    }
  },
  profile: {
    marginTop: theme.spacing(4)
  },
  icon: {
    marginRight: theme.spacing(1)
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
  const { mutate } = me
  const { application } = me.data as MeDTO

  const profileStatus = resolveStatus(application)

  const initApplication = useLoadingCallback(
    useCallback(async () => {
      try {
        await createApplication()
        mutate()
      } catch (error) {}
    }, [createApplication, mutate])
  )

  return (
    <Container maxWidth="lg">
      <ProfileComponent className={classes.profile} />
      {profileStatus === "start" && (
        <Link to="/application/step/1" onClick={initApplication} className="no-underline">
          <Button className={`${classes.button} ${classes.success}`} variant="contained" fullWidth>
            <FileCopyOutlinedIcon className={classes.icon} />
            เริ่มต้นการสมัครเข้าค่าย
          </Button>
        </Link>
      )}

      {profileStatus === "continue" && (
        <Button className={`${classes.button} ${classes.warning}`} variant="contained" fullWidth>
          <PlaylistPlayIcon className={classes.icon} />
          แก้ไขข้อมูลการสมัคร
        </Button>
      )}
      <StatusInfo profileStatus={profileStatus} />
    </Container>
  )
}

export { ProfileModule }
