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
    name: props.name,
    surname: props.surname,
    nickname: props.nickname,
    birthDate: props.birthDate,
    religion: props.religion,
    education: props.education,
    school: props.school,
    province: props.province,
    health: {
      bloodType: props.health.bloodType,
      congenitalDisease: props.health.congenitalDisease,
      allergicFood: props.health.allergicFood,
      allergicDrug: props.health.allergicDrug,
      drug: props.health.drug
    },
    contact: {
      recipient: props.contact.recipient,
      address: props.contact.address,
      subDistrict: props.contact.subDistrict,
      district: props.contact.district,
      province: props.contact.province,
      zip: props.contact.zip,
      phoneNumber: props.contact.phoneNumber,
      homeNumber: props.contact.homeNumber,
      facebookName: props.contact.facebookName,
      lineId: props.contact.lineId,
      parentName: props.contact.parentName,
      parentNumber: props.contact.parentNumber,
      parentRelationship: props.contact.parentRelationship
    }
  }
}

export const convertAnswer1SchemaToAnswer1DTO = (props: Answer1Model): Answer1DTO => {
  return {
    answer: {
      firstPart: {
        answer1: props.firstPart.answer1,
        answer2: {
          first: props.firstPart.answer2.first,
          second: props.firstPart.answer2.second,
          third: props.firstPart.answer2.third,
          fourth: props.firstPart.answer2.fourth
        },
        answer3: props.firstPart.answer3,
        answer4: {
          first: props.firstPart.answer4.first,
          second: props.firstPart.answer4.second,
          third: props.firstPart.answer4.third,
          fourth: props.firstPart.answer4.fourth,
          fifth: props.firstPart.answer4.fifth.text || "",
          sixth: props.firstPart.answer4.fifth.text || ""
        },
        answer5: props.firstPart.answer5,
        answer6: parseInt(props.firstPart.answer6),
        answer7: props.firstPart.answer7
      }
    }
  }
}

export const convertAnswer2SchemaToAnswer2DTO = (props: Answer2Model): Answer2DTO => {
  return {
    answer: {
      secondPart: {
        answer1: props.secondPart.answer1,
        answer2: props.secondPart.answer2,
        answer3: props.secondPart.answer3,
        answer4: props.secondPart.answer4,
        answer5: props.secondPart.answer5,
        answer6: props.secondPart.answer6
      }
    }
  }
}
