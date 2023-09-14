export enum ValidShirtSize {
  none = "",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XL2 = "2XL",
  XL3 = "3XL"
}

export interface OptionsDTO {
  shirtSize?: ValidShirtSize
  accomodationRequested?: boolean
  breakfastRequested?: boolean
}

interface ProfileDTO {
  title: string
  firstName: string
  lastName: string
  nickName: string
  birthDate: string
  phoneNumber: string
  religion: string
  educationLevel: string
  educationProgram: string
  educationalInstitution: string
  educationalInstitutionProvince: string
  bloodGroup: string
  illness: string
  foodRestriction: string
  allergicDrug: string
  illnessDrug: string
  mailRecipientName: string
  mailAddress: string
  mailTumbol: string
  mailAmphoe: string
  mailProvince: string
  mailPostalCode: string
  mobileTelephone: string
  landlineTelephone: string | null
  contactEmail: string
  contactFacebook: string
  contactLineApp: string
  parentName: string
  parentTelephone: string
  parentRelationship: string
  shirtSize?: ValidShirtSize
  interviewTime?: string
  accommodationRequested?: boolean
  breakfastRequested?: boolean
  interviewAvailability: string
  unavailableReason: string | null
}

export default ProfileDTO
