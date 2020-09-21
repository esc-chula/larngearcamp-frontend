import yup, { object, string } from "yup"

const ProfileSchema = object().shape({
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
  }),
  contact: object({
    recipient: string().trim().required("กรุณากรอกชื่อ-นามสกุล"),
    address: string().trim().required("กรุณาระบุที่อยู่"),
    subDistrict: string().trim().required("กรุณาระบบตำบล/แขวง"),
    district: string().trim().required("กรุณาระบุอำเภอ/เขต"),
    province: string().trim().required("กรุณาระบุจังหวัด"),
    zip: string().trim().required("กรุณาระบบรหัสไปรษณี"),
    phoneNumber: string().trim().required("กรุณาระบุเบอร์โทร"),
    homeNumber: string().trim().required("กรุณาระบบเบอร์บ้าน"),
    facebookName: string().trim().required("กรุณาระบุชื่อเฟสบุ๊ค"),
    lineId: string().trim().required("กรุณาระบุไลน์ไอดี"),
    parentName: string().trim().required("กรุณาระบุชื่อผู้ปกครอง"),
    parentNumber: string().trim().required("กรุณาระบุเบอร์โทรผู้ปกครอง"),
    parentRelationship: string().trim().required("กรุณาระบุความเกี่ยวข้อง")
  })
})

export type ProfileModel = yup.InferType<typeof ProfileSchema>

export default ProfileSchema
