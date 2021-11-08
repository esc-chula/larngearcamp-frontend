import { ApplicationState } from "./application.dto"

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
    code: string
    picture: string
    applicationState: ApplicationState
  }
  role: "admin" | "user"
  updatedAt: string
}

export default UserDTO
