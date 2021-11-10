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
import { ProfileStatus } from "../core/models/profileStatus.model"
import RegisterCard from "../core/components/profile/registercard.component"
import StepCardList from "../core/components/profile/stepCardList.component"
import { ApplicationModels } from "../core/models/application.models"
import MyProfileModel from "../core/models/myprofile.models"
import { useApplicationStateContext } from "../core/providers/applicationState.provider"
import { ApplicationState, DocumentStateDetail, FileStatus } from "../core/models/dto/application.dto"
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

const ProfileModule = () => {
  const classes = useStyles()
  const { me } = useAuthContext()
  const { application } = useApplicationStateContext()

  const { lgCode, applicationState, firstname, lastname } = me.data as MyProfileModel

  function resolveFileStatus(file1Status: FileStatus, file2Status: FileStatus, file3Status: FileStatus) {
    const files = [file1Status, file2Status, file3Status]
    if (files.includes("EMPTY")) return "EMPTY"
    if (files.includes("CHANGE_REQUIRED")) return "CHANGE_REQUIRED"
    if (files.includes("UPLOADED")) return "UPLOADED"
    return "PASSED"
  }

  const fileStatus: FileStatus = resolveFileStatus(application.photo.status, application.parentalConsent.status, application.transcript.status)

  const resolveProfileStatus = {
    NOT_FILLED: "start" as ProfileStatus,
    DRAFT: "draft" as ProfileStatus,
    SUBMITTED: {
      EMPTY: "draft" as ProfileStatus, // This state will not happen
      UPLOADED: "submitted" as ProfileStatus,
      CHANGE_REQUIRED: "fileRejected" as ProfileStatus,
      PASSED: "fileChecked" as ProfileStatus // This state will not happen
    },
    FILE_CHECKED: "fileChecked" as ProfileStatus,
    REJECTED_RESOLVE_FILE_ISSUE_TOO_LATE: "fileRejected" as ProfileStatus,
    INVITED_TO_INTERVIEW: "invitedToInterview" as ProfileStatus,
    REJECTED_NOT_INVITED_TO_INTERVIEW: "notInvitedToInterview" as ProfileStatus,
    PASSED_INTERVIEW: "passedInterview" as ProfileStatus,
    REJECTED_FAILED_THE_INTERVIEW: "failedInterview" as ProfileStatus,
    PAYMENT_ACCEPTED: "paymentAccepted" as ProfileStatus
  }

  const profileStatus: ProfileStatus =
    applicationState === "SUBMITTED" ? resolveProfileStatus[applicationState][fileStatus] : resolveProfileStatus[applicationState]

  let content
  if (profileStatus === "start" || profileStatus === "draft") content = <RegisterCard profileStatus={profileStatus} />
  else content = <StepCardList status={profileStatus} lgCode={lgCode} firstname={firstname} lastname={lastname} />

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
