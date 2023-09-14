import ProfileDTO from "../core/models/dto/profile.dto"
import { ProfileModel } from "../schemas/profile.schema"
import { Answer1Model } from "../schemas/answer1.schema"
import Answer1DTO from "../core/models/dto/answer1.dto"
import { Answer2Model } from "../schemas/answer2.schema"
import Answer2DTO from "../core/models/dto/answer2.dto"

export const resolve = (path: string, obj: any) => {
  return path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : null
  }, obj)
}

export const convertProfileSchemaToProfileDTO = (props: ProfileModel): ProfileDTO => {
  return {
    title: props.title,
    firstName: props.name,
    lastName: props.surname,
    nickName: props.nickname,
    birthDate: props.birthDate,
    phoneNumber: props.phoneNumber,
    religion: props.religion,
    educationLevel: props.education,
    educationProgram: props.studyProgram,
    educationalInstitution: props.school,
    educationalInstitutionProvince: props.province,
    bloodGroup: props.health.bloodType,
    illness: props.health.congenitalDisease,
    foodRestriction: props.health.allergicFood,
    allergicDrug: props.health.allergicDrug,
    illnessDrug: props.health.drug,
    mailRecipientName: props.contact.recipient,
    mailAddress: props.contact.address,
    mailTumbol: props.contact.subDistrict,
    mailAmphoe: props.contact.district,
    mailProvince: props.contact.province,
    mailPostalCode: props.contact.zip,
    landlineTelephone: props.contact.homeNumber ?? null,
    mobileTelephone: props.contact.phoneNumber,
    contactEmail: props.contact.email,
    contactFacebook: props.contact.facebookName,
    contactLineApp: props.contact.lineId,
    parentName: props.contact.parentName,
    parentRelationship: props.contact.parentRelationship,
    parentTelephone: props.contact.parentNumber,
    interviewAvailability: props.misc.interviewAvailability,
    unavailableReason: props.misc.unavailableReason ?? null
  }
}

export const convertAnswer1SchemaToAnswer1DTO = (props: Answer1Model): Answer1DTO => {
  return {
    answerA1: props.firstPart.answer1,
    answerA2_1: parseInt(props.firstPart.answer2.first),
    answerA2_2: parseInt(props.firstPart.answer2.second),
    answerA2_3: parseInt(props.firstPart.answer2.third),
    answerA2_4: parseInt(props.firstPart.answer2.fourth),
    answerA2_5: parseInt(props.firstPart.answer2.fifth),
    answerA3: props.firstPart.answer3,
    answerA4: props.firstPart.answer4,
    answerA5_1: !!props.firstPart.answer5?.first,
    answerA5_2: !!props.firstPart.answer5?.second,
    answerA5_3: props.firstPart.answer5.third.checked ? props.firstPart.answer5.third.text || "" : "",
    answerA5_4: !!props.firstPart.answer5?.fourth,
    answerA5_5: !!props.firstPart.answer5?.fifth,
    answerA5_6: !!props.firstPart.answer5?.sixth,
    answerA5_7: !!props.firstPart.answer5?.seventh,
    answerA5_8: props.firstPart.answer5.eightth.checked ? props.firstPart.answer5.eightth.text || "" : "",
    answerA6: props.firstPart.answer6,
    answerA7: props.firstPart.answer7,
    answerA8: props.firstPart.answer8,
    answerA9: props.firstPart.answer9
  }
}

export const convertAnswer2SchemaToAnswer2DTO = (props: Answer2Model): Answer2DTO => {
  return {
    answerB1: props.secondPart.answer1,
    answerB2: props.secondPart.answer2,
    answerB3: props.secondPart.answer3,
    answerB4: props.secondPart.answer4,
    answerB5: props.secondPart.answer5,
    answerB6: props.secondPart.answer6
  }
}
