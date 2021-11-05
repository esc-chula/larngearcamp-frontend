import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ProfileCard from "../core/components/profile/profilecard.component"
import { Container, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { useApplicationContext } from "../core/providers/application.provider"
import { useLoadingCallback, useLoadingStatus } from "../core/components/loading.component"
import StepCard from "../core/components/profile/stepCard.component"
import { useAuthContext } from "../core/providers/auth.provider"
import MeDTO from "../core/models/dto/me.dto"
import { ProfileStatus } from "../core/models/statusInfo.model"
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import { RedWaveComponent } from "../core/components/redWave.component"
import BackgroundComponent from "../core/components/background.component"
import RegisterCard from "../core/components/profile/registercard.component"
//import { useApplicationStateContext } from "../core/providers/applicationState.provider"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3)
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
  }
}))

/* const resolveStatus = (application: MeDTO["application"]): ProfileStatus => {
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
} */

const ProfileV2Module = () => {
  const classes = useStyles()
  const setLoading = useLoadingStatus()
  //   const { createApplication } = useApplicationContext()
  //   const { mutateApplication } = useApplicationStateContext()
  //   const { me } = useAuthContext()
  //   const { mutate: mutateMe } = me
  //   const { application } = me.data as MeDTO

  //   const profileStatus = resolveStatus(application)

  const profileStatus: ProfileStatus = "start"

  //   const initApplication = useLoadingCallback(
  //     useCallback(async () => {
  //       try {
  //         setLoading(true)
  //         await createApplication()
  //         await mutateMe()
  //         await mutateApplication()
  //         setLoading(true)
  //       } catch (error) {}
  //     }, [createApplication, mutateMe, mutateApplication, setLoading])
  //   )

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        {/* <RegisterCard profileStatus="start" /> */}
        <ProfileCard />
        <StepCard profileStatus={profileStatus} />
        <StepCard profileStatus={profileStatus} />
      </Container>
    </>
  )
}

export { ProfileV2Module }
