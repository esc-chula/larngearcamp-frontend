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

  const resolveStepProps = (status: ProfileStatus) => {
    let props = Array<StepCardProps>(7)
    switch (status) {
      case "submitted":
        props[1] = { step: 1, status: "complete", pass: "pass" }
        props[2] = { step: 2, status: "inProgress", pass: "pass" }
        props[3] = { step: 3, status: "incomplete", pass: "pass" }
        props[4] = { step: 4, status: "incomplete", pass: "pass" }
        props[5] = { step: 5, status: "incomplete", pass: "pass" }
        props[6] = { step: 6, status: "incomplete", pass: "pass" }
        break
      case "fileChecked":
        props[1] = { step: 1, status: "complete", pass: "pass" }
        props[2] = { step: 2, status: "complete", pass: "pass" }
        props[3] = { step: 3, status: "inProgress", pass: "pass" }
        props[4] = { step: 4, status: "incomplete", pass: "pass" }
        props[5] = { step: 5, status: "incomplete", pass: "pass" }
        props[6] = { step: 6, status: "incomplete", pass: "pass" }
        break
      case "fileRejected":
        props[1] = { step: 1, status: "complete", pass: "pass" }
        props[2] = { step: 2, status: "inProgress", pass: "fail" }
        props[3] = { step: 3, status: "incomplete", pass: "pass" }
        props[4] = { step: 4, status: "incomplete", pass: "pass" }
        props[5] = { step: 5, status: "incomplete", pass: "pass" }
        props[6] = { step: 6, status: "incomplete", pass: "pass" }
        break
      case "invitedToInterview":
        props[1] = { step: 1, status: "complete", pass: "pass" }
        props[2] = { step: 2, status: "complete", pass: "pass" }
        props[3] = { step: 3, status: "complete", pass: "pass" }
        props[4] = { step: 4, status: "inProgress", pass: "pass" }
        props[5] = { step: 5, status: "incomplete", pass: "pass" }
        props[6] = { step: 6, status: "incomplete", pass: "pass" }
        break
      case "notInvitedToInterview":
        props[1] = { step: 1, status: "complete", pass: "pass" }
        props[2] = { step: 2, status: "complete", pass: "pass" }
        props[3] = { step: 3, status: "complete", pass: "fail" }
        props[4] = { step: 4, status: "incomplete", pass: "pass" }
        props[5] = { step: 5, status: "incomplete", pass: "pass" }
        props[6] = { step: 6, status: "incomplete", pass: "pass" }
        break
      case "passedInterview":
        props[1] = { step: 1, status: "complete", pass: "pass" }
        props[2] = { step: 2, status: "complete", pass: "pass" }
        props[3] = { step: 3, status: "complete", pass: "pass" }
        props[4] = { step: 4, status: "complete", pass: "pass" }
        props[5] = { step: 5, status: "inProgress", pass: "pass" }
        props[6] = { step: 6, status: "incomplete", pass: "pass" }
        break
      case "failedInterview":
        props[1] = { step: 1, status: "complete", pass: "pass" }
        props[2] = { step: 2, status: "complete", pass: "pass" }
        props[3] = { step: 3, status: "complete", pass: "pass" }
        props[4] = { step: 4, status: "complete", pass: "fail" }
        props[5] = { step: 5, status: "incomplete", pass: "pass" }
        props[6] = { step: 6, status: "incomplete", pass: "pass" }
        break
      case "paymentAccepted":
        props[1] = { step: 1, status: "complete", pass: "pass" }
        props[2] = { step: 2, status: "complete", pass: "pass" }
        props[3] = { step: 3, status: "complete", pass: "pass" }
        props[4] = { step: 4, status: "complete", pass: "pass" }
        props[5] = { step: 5, status: "complete", pass: "pass" }
        props[6] = { step: 6, status: "inProgress", pass: "pass" }
        break
    }
    return props
  }

  let content
  if (profileStatus === "start" || profileStatus === "draft") content = <RegisterCard profileStatus={profileStatus} />
  else
    content = (
      <div>
        <ProfileCard lgNumber={lgCode} fullName={`${firstname} ${lastname}`} />
        {resolveStepProps(profileStatus).map(step => {
          return <StepCard key={`step-card-${step.step}`} step={step.step} status={step.status} pass={step.pass} />
        })}
      </div>
    )

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
