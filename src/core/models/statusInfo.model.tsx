import QandAModel from "./qna.model"

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
