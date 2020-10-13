import ProfileDTO from "../core/models/dto/profile.dto"
import { ProfileModel } from "../schemas/profile.schema"
import { Answer1Model } from "../schemas/answer1.schema"
import Answer1DTO from "../core/models/dto/answer1.dto"
import { Answer2Model } from "../schemas/answer2.schema"
import Answer2DTO from "../core/models/dto/answer2.dto"
import { ApplicationDTO } from "../core/models/dto/application.dto"
import { UserDataProps } from "../core/components/userData.component"

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
      homeNumber: props.contact.homeNumber!,
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
          first: parseInt(props.firstPart.answer2.first),
          second: parseInt(props.firstPart.answer2.second),
          third: parseInt(props.firstPart.answer2.third),
          fourth: parseInt(props.firstPart.answer2.fourth)
        },
        answer3: props.firstPart.answer3,
        answer4: {
          first: !!props.firstPart.answer4.first,
          second: !!props.firstPart.answer4.second,
          third: !!props.firstPart.answer4.third,
          fourth: !!props.firstPart.answer4.fourth,
          fifth: props.firstPart.answer4.fifth.checked ? props.firstPart.answer4.fifth.text || "" : "",
          sixth: props.firstPart.answer4.sixth.checked ? props.firstPart.answer4.sixth.text || "" : ""
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

export const adminSplitingApplicationProfilePart = (props: ApplicationDTO): Array<UserDataProps> => {
  return [
    { name: "ข้อมูลส่วนตัว", header: true, xs: 12, sm: 12, md: 4 },
    { name: "คำนำหน้า", value: props.title, xs: 12, sm: 6, md: 4 },
    { name: "ชื่อจริง", value: props.name, xs: 12, sm: 6, md: 4 },
    { name: "นามสกุล", value: props.surname, xs: 12, sm: 6, md: 4 },
    { name: "ชื่อเล่น", value: props.nickname, xs: 12, sm: 12, md: 4 },
    { name: "ศาสนา", value: props.religion, xs: 12, sm: 6, md: 3 },
    { name: "วันเกิด", value: props.birthDate, xs: 12, sm: 12, md: 5 },

    { name: "ข้อมูลการศึกษา", header: true },
    { name: "ระดับชั้นที่กำลังศึกษา", value: props.education, xs: 12, sm: 6, md: 3 },
    { name: "จังหวัด", value: props.province, xs: 12, sm: 6, md: 4 },
    { name: "โรงเรียน", value: props.school, xs: 12, sm: 12, md: 5 },

    { name: "ข้อมูลสุขภาพ", header: true },
    { name: "หมู่เลือด", value: props.title, xs: 12, sm: 6, md: 3 },
    { name: "โรคประจำตัว", value: props.health.congenitalDisease, xs: 12, sm: 6, md: 4 },
    { name: "อาหารที่แพ้", value: props.health.allergicFood, xs: 12, sm: 12, md: 5 },
    { name: "ยาที่แพ้", value: props.health.allergicDrug, xs: 12, sm: 12, md: 6 },
    { name: "ยาประจำตัว", value: props.health.drug, xs: 12, sm: 12, md: 6 },

    { name: "ที่อยู่ที่สามารถติดต่อได้สะดวกและข้อมูลการติดต่อ", header: true },
    { name: "ชื่อ-นามสกุลผู้รับส่ง", value: props.contact.recipient, xs: 12, sm: 12, md: 6 },
    { name: "บ้านเลขที่ หมู่ที่ และถนน", value: props.contact.address, xs: 12, sm: 12, md: 6 },
    { name: "ตำบล/แขวง", value: props.contact.subDistrict, xs: 12, sm: 6, md: 3 },
    { name: "อำเภอ/เขต", value: props.contact.district, xs: 12, sm: 6, md: 3 },
    { name: "จังหวัด", value: props.contact.province, xs: 12, sm: 6, md: 3 },
    { name: "รหัสไปรษณีย์", value: props.contact.zip, xs: 12, sm: 6, md: 3 },
    { name: "โทรศัพท์บ้าน", value: props.contact.homeNumber, xs: 12, sm: 6, md: 3 },
    { name: "โทรศัพท์มือถือ", value: props.contact.phoneNumber, xs: 12, sm: 6, md: 3 },
    { name: "อีเมล", value: props.userEmail, xs: 12, sm: 12, md: 6 },
    { name: "Facebook", value: props.contact.facebookName, xs: 12, sm: 6, md: 6 },
    { name: "Line ID", value: props.contact.lineId, xs: 12, sm: 6, md: 6 },

    { name: "ข้อมูลการติดต่อผู้ปกครอง", header: true },
    { name: "ชื่อ-นามสกุลผู้ปกครอง", value: props.contact.parentName, xs: 12, sm: 6, md: 5 },
    { name: "หมายเลขโทรศัพท์", value: props.contact.parentNumber, xs: 12, sm: 6, md: 4 },
    { name: "ความสัมพันธ์", value: props.contact.parentRelationship, xs: 12, sm: 6, md: 3 }
  ]
}

export const adminSplitingApplicationAnswerPart = (props: ApplicationDTO): Array<UserDataProps> => {
  const firstPart = props.answer.firstPart
  const secondPart = props.answer.secondPart
  return [
    { name: "ส่วนที่ 1", header: true },
    { name: "คำถามข้อ 1", value: firstPart.answer1, xs: 12, sm: 12, md: 12, multiline: true },
    {
      name: "คำถามข้อ 2",
      value: `${firstPart.answer2.first}, ${firstPart.answer2.second}, ${firstPart.answer2.third}, ${firstPart.answer2.fourth}`,
      xs: 12,
      sm: 12,
      md: 12
    },
    { name: "คำถามข้อ 3", value: firstPart.answer3, xs: 12, sm: 12, md: 12, multiline: true },
    {
      name: "คำถามข้อ 4",
      value: `first = ${firstPart.answer4.first},
second = ${firstPart.answer4.second},
third = ${firstPart.answer4.third},
fourth = ${firstPart.answer4.fourth},
fifth = ${firstPart.answer4.fifth},
sixth = ${firstPart.answer4.sixth}`,
      xs: 12,
      sm: 12,
      md: 12,
      multiline: true
    },
    { name: "คำถามข้อ 5", value: firstPart.answer5, xs: 12, sm: 12, md: 12, multiline: true },
    { name: "คำถามข้อ 6", value: `${firstPart.answer6}`, xs: 12, sm: 12, md: 12, multiline: true },
    { name: "คำถามข้อ 7", value: firstPart.answer7, xs: 12, sm: 12, md: 12, multiline: true },

    { name: "ส่วนที่ 2", header: true },
    { name: "คำถามข้อ 1", value: secondPart.answer1, xs: 12, sm: 12, md: 12, multiline: true },
    { name: "คำถามข้อ 2", value: secondPart.answer2, xs: 12, sm: 12, md: 12, multiline: true },
    { name: "คำถามข้อ 3", value: secondPart.answer3, xs: 12, sm: 12, md: 12, multiline: true },
    { name: "คำถามข้อ 4", value: secondPart.answer4, xs: 12, sm: 12, md: 12, multiline: true },
    { name: "คำถามข้อ 5", value: secondPart.answer5, xs: 12, sm: 12, md: 12, multiline: true },
    { name: "คำถามข้อ 6", value: secondPart.answer6, xs: 12, sm: 12, md: 12, multiline: true }
  ]
}

export const adminSplitingApplicationDocumentPart = (props: ApplicationDTO): Array<UserDataProps> => {
  return [
    { name: "เอกสารประกอบการรับสมัคร", header: true },
    { name: "รูปถ่ายผู้สมัคร", value: props.picture.url, xs: 12, sm: 12, md: 12, linkLabel: props.picture.name },
    { name: "หนังสือรับรองจากผู้ปกครอง", value: props.letterOfConsent.url, xs: 12, sm: 12, md: 12, linkLabel: props.picture.name },
    { name: "ใบ ปพ. 1 หรือ ปพ.7 หรือ เอกสารยืนยันตัวตนอื่นๆ", value: props.transcript.url, xs: 12, sm: 12, md: 12, linkLabel: props.picture.name }
  ]
}
