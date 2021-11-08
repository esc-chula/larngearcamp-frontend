import ProfileDTO from "./profile.dto"
import Answer1DTO from "./answer1.dto"
import Answer2DTO from "./answer2.dto"
import DocumentDTO from "./document.dto"

export type ApplicationState =
  | "DRAFT"
  | "SUBMITTED"
  | "FILE_CHECKED"
  | "REJECTED_RESOLVE_FILE_ISSUE_TOO_LATE"
  | "INVITED_TO_INTERVIEW"
  | "REJECTED_NOT_INVITED_TO_INTERVIEW"
  | "PASSED_INTERVIEW"
  | "REJECTED_FAILED_THE_INTERVIEW"
  | "PAYMENT_ACCEPTED"

export type FileStatus = "CHANGE_REQUIRED" | "EMPTY" | "PASSED" | "UPLOADED"

export interface DocumentStateDetail {
  comment: string
  status: FileStatus
  url: string
}
export interface AllDocumentStateDetail {
  picture: DocumentStateDetail
  parentalConsent: DocumentStateDetail
  transcript: DocumentStateDetail
}

export interface ApplicationInfo {
  id: string
  code?: string
  applicationState: ApplicationState
  documentStateDetails: AllDocumentStateDetail
}

export declare type ApplicationDTO = ApplicationInfo & ProfileDTO & Answer1DTO & Answer2DTO & DocumentDTO
export declare type UpdateApplicationDTO = ProfileDTO | Answer1DTO | Answer2DTO | DocumentDTO
