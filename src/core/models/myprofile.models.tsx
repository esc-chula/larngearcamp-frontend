import { ApplicationState } from "./dto/application.dto"

interface MyProfileModel {
  firstname: string
  lastname: string
  lgCode: string
  picture: string
  applicationState: ApplicationState
}

export default MyProfileModel
