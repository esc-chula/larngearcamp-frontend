import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import { useAuthContext } from "../core/providers/auth.provider"
import { ProfileStatus } from "../core/models/profileStatus.model"
import RegisterCard from "../core/components/profile/registercard.component"
import StepCardList from "../core/components/profile/stepCardList.component"
import MyProfileModel from "../core/models/myprofile.models"
import { useApplicationStateContext } from "../core/providers/applicationState.provider"
import { FileStatus } from "../core/models/dto/application.dto"

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

  const profileStatusMap = {
    NOT_FILLED: ProfileStatus.start,
    DRAFT: ProfileStatus.draft,
    SUBMITTED: {
      EMPTY: ProfileStatus.draft,
      UPLOADED: ProfileStatus.submitted,
      CHANGE_REQUIRED: ProfileStatus.fileRejected,
      PASSED: ProfileStatus.fileChecked
    },
    FILE_CHECKED: ProfileStatus.fileChecked,
    REJECTED_RESOLVE_FILE_ISSUE_TOO_LATE: ProfileStatus.fileRejected,
    INVITED_TO_INTERVIEW: ProfileStatus.invitedToInterview,
    REJECTED_NOT_INVITED_TO_INTERVIEW: ProfileStatus.notInvitedToInterview,
    PASSED_INTERVIEW: ProfileStatus.passedInterview,
    REJECTED_FAILED_THE_INTERVIEW: ProfileStatus.failedInterview,
    PAYMENT_ACCEPTED: ProfileStatus.paymentAccepted
  }

  const profileStatus = applicationState === "SUBMITTED" ? profileStatusMap[applicationState][fileStatus] : profileStatusMap[applicationState]

  let content
  if (profileStatus === ProfileStatus.start || profileStatus === ProfileStatus.draft) content = <RegisterCard profileStatus={profileStatus} />
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
