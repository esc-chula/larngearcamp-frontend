import { ApplicationState, DocumentState, EditingState } from "./application.dto"

interface UserDTO {
  createdAt: string
  email: string
  id: string
  name: {
    display: string | null
    first: string
    last: string
  }
  application?: {
    userId: string
    code: string
    picture: string
    applicationState: ApplicationState
    documentState: DocumentState
    editingState: EditingState
  }
  role: "admin" | "user"
  updatedAt: string
}

export default UserDTO
