import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ProfileCard from "../core/components/profile/profilecard.component"
import { Container } from "@material-ui/core"
import { Link } from "react-router-dom"
import { useApplicationContext } from "../core/providers/application.provider"
import { useLoadingCallback, useLoadingStatus } from "../core/components/loading.component"
import StepCard, { StepCardProps } from "../core/components/profile/stepCard.component"
import { useAuthContext } from "../core/providers/auth.provider"
import MeDTO from "../core/models/dto/me.dto"
import { ProfileStatus } from "../core/models/statusInfo.model"
import RegisterCard from "../core/components/profile/registercard.component"
import StepCardList from "../core/components/profile/stepCardList.component"
import { ApplicationModels } from "../core/models/application.models"
import MyProfileModel from "../core/models/myprofile.models"
import { useApplicationStateContext } from "../core/providers/applicationState.provider"
import { ApplicationState } from "../core/models/dto/application.dto"
//import { useApplicationStateContext } from "../core/providers/applicationState.provider"

const useStyles = makeStyles(theme => ({
  bg: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: -2,
    backgroundColor: "#FFFFFF" //theme.palette.gray[0]
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3)
  }
}))

const resolveStatus = (state: ApplicationState): ProfileStatus => {
  if (!state) {
    return "start"
  }

  switch (state) {
    case "DRAFT":
      return "draft"
    case "SUBMITTED":
      return "submitted"
    case "FILE_CHECKED":
      return "fileChecked"
    case "REJECTED_RESOLVE_FILE_ISSUE_TOO_LATE":
      return "fileRejected"
    case "INVITED_TO_INTERVIEW":
      return "invitedToInterview"
    case "REJECTED_NOT_INVITED_TO_INTERVIEW":
      return "notInvitedToInterview"
    case "PASSED_INTERVIEW":
      return "passedInterview"
    case "REJECTED_FAILED_THE_INTERVIEW":
      return "failedInterview"
    case "PAYMENT_ACCEPTED":
      return "paymentAccepted"
    default:
      return "start"
  }
}

const ProfileModule = () => {
  const classes = useStyles()
  const { me } = useAuthContext()

  const { lgCode, applicationState, firstname, lastname } = me.data as MyProfileModel

  const profileStatus = resolveStatus(applicationState)

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

  let content
  if (profileStatus === "start" || profileStatus === "draft") content = <RegisterCard profileStatus={profileStatus} />
  else content = <StepCardList status={profileStatus} lgCode={lgCode} firstname={firstname} lastname={lastname}/>

  return (
    <>
      <div className={classes.bg} />
      <Container maxWidth="lg" className={classes.container}>
        {content}
      </Container>
    </>
  )
}

export { ProfileModule }
