import yup, { object, string } from "yup"

const ProfileSchema = object()
  .shape({
    title: string().trim().required("กรุณาระบุคำนำหน้า"),
    name: string().trim().required("กรุณาระบุชื่อ"),
    surname: string().trim().required("กรุณาระบุนามสกุล"),
    nickname: string().trim().required("กรุณาระบุชื่อเล่น"),
    birthDate: string().trim().required("กรุณาระบุวันเกิด"),
    religion: string().trim().required("กรุณาระบุศาสนา"),
    education: string().trim().required("กรุณาระบุชั้นปี"),
    school: string().trim().required("กรุณาระบุโรงเรียน"),
    province: string().trim().required("กรุณาระบุจังหวัดโรงเรียน"),
    health: object({
      bloodType: string().trim().required("กรุณาระบุหมู่เลือด"),
      congenitalDisease: string().trim().required("กรุณากรอก -"),
      allergicFood: string().trim().required("กรุณากรอก -"),
      allergicDrug: string().trim().required("กรุณากรอก -"),
      drug: string().trim().required("กรุณากรอก -")
    }).required(),
    contact: object({
      recipient: string().trim().required("กรุณากรอกชื่อ-นามสกุล"),
      address: string().trim().required("กรุณาระบุที่อยู่"),
      subDistrict: string().trim().required("กรุณาระบุตำบล/แขวง"),
      district: string().trim().required("กรุณาระบุอำเภอ/เขต"),
      province: string().trim().required("กรุณาระบุจังหวัด"),
      zip: string().trim().required("กรุณาระบุรหัสไปรษณี"),
      phoneNumber: string()
        .trim()
        .required("กรุณาระบุเบอร์โทร")
        .matches(/^((((\+66|66|0)\d{2})-?\d{3}-?\d{4})|(-))$/, "เบอร์โทรศัพท์ไม่ถูกต้อง"),
      homeNumber: string()
        .trim()
        .required("กรุณาระบุเบอร์บ้าน")
        .matches(/^(\d{9})|(-)$/, "เบอร์โทรศัพท์บ้านไม่ถูกต้อง"),
      facebookName: string().trim().required("กรุณาระบุชื่อเฟสบุ๊ค"),
      lineId: string().trim().required("กรุณาระบุไลน์ไอดี"),
      parentName: string().trim().required("กรุณาระบุชื่อผู้ปกครอง"),
      parentNumber: string()
        .trim()
        .required("กรุณาระบุเบอร์โทรผู้ปกครอง")
        .matches(/^((((\+66|66|0)\d{2})-?\d{3}-?\d{4})|(-))$/, "เบอร์โทรศัพท์ผู้ปกครองไม่ถูกต้อง"),
      parentRelationship: string().trim().required("กรุณาระบุความเกี่ยวข้อง")
    }).required()
  })
  .defined()

export type ProfileModel = yup.InferType<typeof ProfileSchema>

export default ProfileSchema
