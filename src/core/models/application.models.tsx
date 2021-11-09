import Answer1DTO from "./dto/answer1.dto"
import Answer2DTO from "./dto/answer2.dto"
import { AllDocumentStateDetail, ApplicationStateDTO } from "./dto/application.dto"
import ProfileDTO from "./dto/profile.dto"

export declare type ApplicationModels = ProfileDTO & Answer1DTO & Answer2DTO & AllDocumentStateDetail & ApplicationStateDTO
