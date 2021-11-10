import React from "react"
import StepCard, { StepCardProps } from "./stepCard.component"
import ProfileCard from "./profilecard.component"
import { ProfileStatus } from "../../models/statusInfo.model"

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
      case "submitted":
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "inProgress", isApproved: "true" }
        props[3] = { step: 3, status: "incomplete", isApproved: "true" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case "fileChecked":
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "inProgress", isApproved: "true" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case "fileRejected":
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "inProgress", isApproved: "false" }
        props[3] = { step: 3, status: "incomplete", isApproved: "true" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case "invitedToInterview":
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "inProgress", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case "notInvitedToInterview":
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "false" }
        props[4] = { step: 4, status: "incomplete", isApproved: "true" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case "passedInterview":
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "complete", isApproved: "true" }
        props[5] = { step: 5, status: "inProgress", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case "failedInterview":
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "complete", isApproved: "false" }
        props[5] = { step: 5, status: "incomplete", isApproved: "true" }
        props[6] = { step: 6, status: "incomplete", isApproved: "true" }
        break
      case "paymentAccepted":
        props[1] = { step: 1, status: "complete", isApproved: "true" }
        props[2] = { step: 2, status: "complete", isApproved: "true" }
        props[3] = { step: 3, status: "complete", isApproved: "true" }
        props[4] = { step: 4, status: "complete", isApproved: "true" }
        props[5] = { step: 5, status: "complete", isApproved: "true" }
        props[6] = { step: 6, status: "inProgress", isApproved: "true" }
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
