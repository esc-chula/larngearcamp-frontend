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

const resolveStatus = (state: String /*application: MeDTO["application"]*/): ProfileStatus => {
  // if (!application) {
  //   return "start"
  // }

  //const { lgNumber, state } = application //new API

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
  const setLoading = useLoadingStatus()
  //   const { createApplication } = useApplicationContext()
  //   const { mutateApplication } = useApplicationStateContext()
  //   const { me } = useAuthContext()
  //   const { mutate: mutateMe } = me
  //   const { application } = me.data as MeDTO

  //   const profileStatus = resolveStatus(application)

  const profileStatus: ProfileStatus = resolveStatus("REJECTED_RESOLVE_FILE_ISSUE_TOO_LATE")

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
  else content = <StepCardList status={profileStatus} lgCode="LG1234" firstname="สมชาย" lastname="อยากเข้าค่ายลานเกียร์" />

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
