import ProfileDTO from "./profile.dto"
import Answer1DTO from "./answer1.dto"
import Answer2DTO from "./answer2.dto"
import DocumentDTO from "./document.dto"

export type EditingState = "FULL" | "DOCUMENT_ONLY" | "LOCKED"

export interface ApplicationInfo {
  id: string
  userId: string
  code?: string
  editingState: EditingState
  applicationState: string
  documentState: string
}

export declare type ApplicationDTO = ApplicationInfo & ProfileDTO & Answer1DTO & Answer2DTO & DocumentDTO
export declare type UpdateApplicationDTO = ProfileDTO | Answer1DTO | Answer2DTO | DocumentDTO
