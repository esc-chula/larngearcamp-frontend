import ProfileDTO, { ShirtSizeDTO } from "./profile.dto"
import Answer1DTO from "./answer1.dto"
import Answer2DTO from "./answer2.dto"

export type ApplicationState =
  | "NOT_FILLED"
  | "DRAFT"
  | "SUBMITTED"
  | "FILE_CHECKED"
  | "REJECTED_RESOLVE_FILE_ISSUE_TOO_LATE"
  | "INVITED_TO_INTERVIEW"
  | "REJECTED_NOT_INVITED_TO_INTERVIEW"
  | "PASSED_INTERVIEW"
  | "REJECTED_FAILED_THE_INTERVIEW"
  | "PAYMENT_ACCEPTED"
  | "REJECTED_FAIL_TO_PAY"

export type FileStatus = "EMPTY" | "UPLOADED" | "CHANGE_REQUIRED" | "PASSED"

export interface DocumentStateDetail {
  id: string
  comment: string
  status: FileStatus
  url: string
  originalName: string
}

export interface AllDocumentStateDetail {
  photo: DocumentStateDetail
  parentalConsent: DocumentStateDetail
  transcript: DocumentStateDetail
  payment: DocumentStateDetail
}

export interface ApplicationStateDTO {
  lgNumber: string
  state: ApplicationState
}

export declare type ApplicationDTO = ProfileDTO & Answer1DTO & Answer2DTO
export declare type UpdateApplicationDTO = ProfileDTO | Answer1DTO | Answer2DTO
export declare type updateApplicationPostSubmitDTO = ShirtSizeDTO
