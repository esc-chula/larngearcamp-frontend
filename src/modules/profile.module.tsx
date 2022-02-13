import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import { useAuthContext } from "../core/providers/auth.provider"
import { ProfileStatus } from "../core/models/profileStatus.model"
import RegisterCard from "../core/components/profile/registercard.component"
import StepCardList from "../core/components/profile/stepCardList.component"
import MyProfileModel from "../core/models/myprofile.models"
import { FileStatus } from "../core/models/dto/application.dto"
import { useDialogContext } from "../core/providers/dialog.provider"
import { useApplicationStateContext } from "../core/providers/applicationState.provider"
import { ValidShirtSize } from "../core/models/dto/profile.dto"
import ShirtSizeDialog from "../core/components/profile/shirtSizeDialog.component"
const PaymentDialog = React.lazy(() => import("../core/components/profile/paymentDialog.component"))

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
  const { paymentDialog, shirtSizeDialog } = useDialogContext()
  const { application } = useApplicationStateContext()

  const { lgCode, applicationState, firstname, lastname, documentState } = me.data as MyProfileModel

  function resolveFileStatus(file1Status: FileStatus, file2Status: FileStatus, file3Status: FileStatus) {
    const files = [file1Status, file2Status, file3Status]
    if (files.includes("EMPTY")) return "EMPTY"
    if (files.includes("CHANGE_REQUIRED")) return "CHANGE_REQUIRED"
    if (files.includes("UPLOADED")) return "UPLOADED"
    return "PASSED"
  }

  const fileStatus: FileStatus = resolveFileStatus(documentState.photo, documentState.parentalConsent, documentState.transcript)

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
    PAYMENT_ACCEPTED: ProfileStatus.paymentAccepted,
    REJECTED_FAIL_TO_PAY: ProfileStatus.paymentFailed
  }

  const profileStatus = applicationState === "SUBMITTED" ? profileStatusMap[applicationState][fileStatus] : profileStatusMap[applicationState]

  let content
  if (profileStatus === ProfileStatus.start || profileStatus === ProfileStatus.draft) content = <RegisterCard profileStatus={profileStatus} />
  else content = <StepCardList status={profileStatus} lgCode={lgCode} firstname={firstname} lastname={lastname} />

  console.log(application.accomodationRequested)
  console.log(application.breakfastRequested)

  return (
    <>
      <div className={classes.bg} />
      <Container maxWidth="lg" className={classes.container}>
        <PaymentDialog
          open={paymentDialog}
          paymentStatus={documentState.payment}
          serverFile={application.payment}
          accommodationRequested={!!application.accomodationRequested} // Something wrong here
          breakfastRequested={!!application.breakfastRequested}
        />
        <ShirtSizeDialog open={shirtSizeDialog} existingShirtSize={application.shirtSize === null ? ValidShirtSize.none : application.shirtSize!} />
        {content}
      </Container>
    </>
  )
}

export { ProfileModule }
