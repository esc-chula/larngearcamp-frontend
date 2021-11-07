import QandAModel from "./qna.model"

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
  start: QandAModel
  continue: QandAModel
  pending: QandAModel
  docOk: QandAModel
  docNotOk: QandAModel
  passedInterview: QandAModel
  failedInterview: QandAModel
  passedFinal: QandAModel
  failedFinal: QandAModel
}

export default StatusInfoModel
