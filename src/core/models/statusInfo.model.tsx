import FAQModel from "./faq.model"

export type ProfileStatus =
  | "start"
  | "draft"
  | "submitted"
  | "fileChecked"
  | "fileRejected"
  | "invitedToInterview"
  | "notInvitedToInterview"
  | "passedInterview"
  | "failedInterview"
  | "paymentAccepted"

interface StatusInfoModel {
  start: FAQModel
  continue: FAQModel
  pending: FAQModel
  docOk: FAQModel
  docNotOk: FAQModel
  passedInterview: FAQModel
  failedInterview: FAQModel
  passedFinal: FAQModel
  failedFinal: FAQModel
}

export default StatusInfoModel
