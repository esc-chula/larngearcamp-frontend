import FAQModel from "./faq.model"

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
