import { object, mixed, string } from "yup"
import yup from "yup"

const urlTest = string()
  .required("ยังไม่ได้อัพโหลดไฟล์")
  .test("not default", "ยังไม่ได้อัพโหลดไฟล์", value => {
    return !!value && value !== ""
  })

const DocumentSchema = object()
  .shape({
    picture: mixed()
      .required()
      .test("fileSize", "ขนาดไฟล์ใหญ่เกิน 2MB", value => {
        return value.length ? value[0].size <= 2000000 : true
      }),
    pictureURL: urlTest,
    transcript: mixed()
      .required()
      .test("fileSize", "ขนาดไฟล์ใหญ่เกิน 2MB", value => {
        return value.length ? value[0].size <= 2000000 : true
      }),
    transcriptURL: urlTest,
    letterOfConsent: mixed()
      .required()
      .test("fileSize", "ขนาดไฟล์ใหญ่เกิน 2MB", value => {
        return value.length ? value[0].size <= 2000000 : true
      }),
    letterOfConsentURL: urlTest
  })
  .defined()

export type DocumentModel = yup.InferType<typeof DocumentSchema>

export default DocumentSchema
