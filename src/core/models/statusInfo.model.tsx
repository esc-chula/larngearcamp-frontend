import QandAModel from "./qna.model"

export type ProfileStatus =
  | "start"
  | "continue"
  | "pending"
  | "docOk"
  | "docNotOk"
  | "passedInterview"
  | "failedInterview"
  | "passedFinal"
  | "failedFinal"

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
