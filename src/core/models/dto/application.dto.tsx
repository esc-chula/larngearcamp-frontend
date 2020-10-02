import ProfileDTO from "./profile.dto"
import Answer1DTO from "./answer1.dto"
import Answer2DTO from "./answer2.dto"
import DocumentDTO from "./document.dto"

export type EditingState = "FULL" | "DOCUMENT_ONLY" | "LOCKED"
export type ApplicationState = "REVIEW" | "PASSED_INTERVIEW" | "NOT_PASSED_INTERVIEW" | "PASSED_FINAL" | "NOT_PASSED_FINAL"
export type DocumentState = "REVIEW" | "PASSED" | "NOT_PASSED"

export interface DocumentStateDetail {
  pass: boolean | null
  message: string
}
export interface AllDocumentStateDetail {
  picture: DocumentStateDetail
  letterOfConsent: DocumentStateDetail
  transcript: DocumentStateDetail
}

export interface ApplicationInfo {
  id: string
  userId: string
  code?: string
  editingState: EditingState
  applicationState: ApplicationState
  documentState: DocumentState
  documentStateDetails: AllDocumentStateDetail
}

export declare type ApplicationDTO = ApplicationInfo & ProfileDTO & Answer1DTO & Answer2DTO & DocumentDTO
export declare type UpdateApplicationDTO = ProfileDTO | Answer1DTO | Answer2DTO | DocumentDTO
