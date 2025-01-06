import React from "react"
import StepCard, { StepCardProps } from "./stepCard.component"
import ProfileCard from "./profilecard.component"
import { ProfileStatus } from "../../models/profileStatus.model"

interface StepCardListProps {
  status: ProfileStatus
  lgCode: string
  firstname: string
  lastname: string
}

const StepCardList: React.FC<StepCardListProps> = ({ status, lgCode, firstname, lastname }) => {
  const resolveStepProps = (status: ProfileStatus) => {
    let props = Array<StepCardProps>(7)
    switch (status) {
      case ProfileStatus.submitted:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "inProgress", isApproved: "true" }
        props[3] = { step: 3, status: "incomplete", isApproved: "true" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case ProfileStatus.fileChecked:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "inProgress", isApproved: "true" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case ProfileStatus.fileRejected:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "inProgress", isApproved: "false" }
        props[3] = { step: 3, status: "incomplete", isApproved: "true" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case ProfileStatus.fileLated:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "false" }
        props[3] = { step: 3, status: "incomplete", isApproved: "true" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case ProfileStatus.invitedToInterview:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "inProgress", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case ProfileStatus.notInvitedToInterview:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "false" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case ProfileStatus.passedInterview:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "complete", isApproved: "true" }
        props[5] = { step: 5, status: "inProgress", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case ProfileStatus.failedInterview:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "complete", isApproved: "false" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case ProfileStatus.paymentAccepted:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "complete", isApproved: "true" }
        props[5] = { step: 5, status: "complete", isApproved: "true" }
        props[6] = { step: 6, status: "inProgress", isApproved: "true" }
        break
      case ProfileStatus.passedTheCamp:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "complete", isApproved: "true" }
        props[5] = { step: 5, status: "complete", isApproved: "true" }
        props[6] = { step: 6, status: "complete", isApproved: "true" }
        break
      case ProfileStatus.paymentFailed:
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "complete", isApproved: "true" }
        props[5] = { step: 5, status: "complete", isApproved: "false" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
    }
    return props
  }

  return (
    <>
      <ProfileCard lgCode={lgCode} fullName={`${firstname} ${lastname}`} />
      {resolveStepProps(status).map(step => {
        return <StepCard key={`step-card-${step.step}`} step={step.step} status={step.status} isApproved={step.isApproved} />
      })}
    </>
  )
}

export default StepCardList
