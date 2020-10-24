import { ApplicationState, DocumentState } from "./dto/application.dto"

interface TableData {
  id: string
  name: string
  documentStatus: DocumentState
  applicantStatus: ApplicationState
}

export default TableData
