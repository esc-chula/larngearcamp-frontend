import { ApplicationState } from "./application.dto"

interface MeDTO {
  id: string
  email: string
  role: string
  name: {
    first: string
    last: string
    display: string
  }
  application?: {
    code: string
    picture: string
    applicationState: ApplicationState
  }
}

export default MeDTO
