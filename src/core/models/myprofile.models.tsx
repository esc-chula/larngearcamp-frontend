import { ApplicationState, FileStatus } from "./dto/application.dto"
import DocumentType from "../constants/documentType.constant"

type DocumentState = {
  [index in DocumentType]: FileStatus
}

interface MyProfileModel {
  firstname: string
  lastname: string
  lgCode: string
  picture: string
  applicationState: ApplicationState
  documentState: DocumentState
}

export default MyProfileModel
