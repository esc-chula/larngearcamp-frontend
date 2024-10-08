import yup, { object, string } from "yup"
import { provincesConstant } from "../core/constants/provinces.constant"

const ProfileSchema = object()
  .shape({
    title: string().trim().required("กรุณาระบุคำนำหน้า"),
    name: string().trim().required("กรุณาระบุชื่อ"),
    surname: string().trim().required("กรุณาระบุนามสกุล"),
    nickname: string().trim().required("กรุณาระบุชื่อเล่น"),
    birthDate: string().trim().required("กรุณาระบุวันเกิด"),
    phoneNumber: string()
      .trim()
      .required("กรุณาระบุเบอร์โทร")
      .matches(/^((((\+66|66|0)\d{2})-?\d{3}-?\d{4})|(-))$/, "เบอร์โทรศัพท์ไม่ถูกต้อง"),
    religion: string().trim().required("กรุณาระบุศาสนา"),
    shirtSize: string().trim().required("กรุณาระบุไซส์เสื้อ"),
    education: string().trim().required("กรุณาระบุชั้นปี"),
    studyProgram: string().trim().required("กรุณาระบุสายการเรียน"),
    school: string().trim().required("กรุณาระบุโรงเรียน"),
    province: string()
      .trim()
      .required("กรุณาระบุจังหวัดโรงเรียน")
      .test("invalid", "กรุณาระบุจังหวัดโรงเรียนให้ถูกต้อง", value => {
        return !!value && provincesConstant.includes(value)
      }),
    health: object({
      bloodType: string().trim().required("กรุณาระบุหมู่เลือด"),
      congenitalDisease: string().trim().required("หากไม่มี กรุณากรอก -"),
      allergicFood: string().trim().required("หากไม่มี กรุณากรอก -"),
      allergicDrug: string().trim().required("หากไม่มี กรุณากรอก -"),
      drug: string().trim().required("หากไม่มี กรุณากรอก -")
    }).required(),
    contact: object({
      recipient: string().trim().required("กรุณากรอกชื่อ-นามสกุล"),
      address: string().trim().required("กรุณาระบุที่อยู่"),
      subDistrict: string().trim().required("กรุณาระบุตำบล/แขวง"),
      district: string().trim().required("กรุณาระบุอำเภอ/เขต"),
      province: string().trim().required("กรุณาระบุจังหวัด"),
      zip: string().trim().required("กรุณาระบุรหัสไปรษณีย์"),
      phoneNumber: string()
        .trim()
        .required("กรุณาระบุเบอร์โทร")
        .matches(/^((((\+66|66|0)\d{2})-?\d{3}-?\d{4})|(-))$/, "เบอร์โทรศัพท์ไม่ถูกต้อง"),
      homeNumber: string()
        .trim()
        .matches(/^(\d{9})|(-)|\s{0}$/, "เบอร์โทรศัพท์บ้านไม่ถูกต้อง"),
      facebookName: string().trim().required("กรุณาระบุชื่อเฟซบุ๊ก"),
      lineId: string().trim().required("กรุณาระบุไลน์ไอดี"),
      email: string()
        .trim()
        .required("กรุณาระบุอีเมล")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "อีเมลไม่ถูกต้อง"),
      parentName: string().trim().required("กรุณาระบุชื่อผู้ปกครอง"),
      parentNumber: string()
        .trim()
        .required("กรุณาระบุเบอร์โทรผู้ปกครอง")
        .matches(/^((((\+66|66|0)\d{2})-?\d{3}-?\d{4})|(-))$/, "เบอร์โทรศัพท์ผู้ปกครองไม่ถูกต้อง"),
      parentRelationship: string().trim().required("กรุณาระบุความเกี่ยวข้อง")
    }).required(),
    misc: object({
      interviewAvailability: string().trim().required("กรุณาเลือกคำตอบ"),
      unavailableReason: string()
        .trim()
        .when("interviewAvailability", {
          is: "UNAVAILABLE",
          then: string().trim().required("กรุณาระบุสาเหตุที่ไม่สะดวก"),
          otherwise: string().trim().nullable(true)
        })
        .nullable(true)
    }).required()
  })
  .defined()

export type ProfileModel = yup.InferType<typeof ProfileSchema>

export default ProfileSchema
