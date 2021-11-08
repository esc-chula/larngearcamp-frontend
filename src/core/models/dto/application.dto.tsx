import ProfileDTO from "./profile.dto"
import Answer1DTO from "./answer1.dto"
import Answer2DTO from "./answer2.dto"
import DocumentDTO from "./document.dto"

export type EditingState = "FULL" | "DOCUMENT_ONLY" | "LOCKED"
export type ApplicationState = "REVIEW" | "PASSED_INTERVIEW" | "NOT_PASSED_INTERVIEW" | "PASSED_FINAL" | "NOT_PASSED_FINAL"
export type DocumentState = "REVIEW" | "PASSED" | "NOT_PASSED"
export type FileStatus = "CHANGE_REQUIRED" | "EMPTY" | "PASSED" | "UPLOADED"

export interface DocumentStateDetail {
  comment: string
  status: FileStatus
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
