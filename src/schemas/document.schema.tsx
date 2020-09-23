import { object, mixed, string } from "yup"
import yup from "yup"

const DocumentSchema = object()
  .shape({
    picture: mixed()
      .required()
      .test("not uploaded", "ยังไม่ได้อัพโหลดไฟล์", value => {
        return value.length
      })
      .test("fileSize", "ขนาดไฟล์ใหญ่เกิน 2MB", value => {
        return value.length ? value[0].size <= 2000000 : true
      }),
    pictureURL: string().required(),
    transcript: mixed()
      .required()
      .test("not uploaded", "ยังไม่ได้อัพโหลดไฟล์", value => {
        return value.length
      })
      .test("fileSize", "ขนาดไฟล์ใหญ่เกิน 2MB", value => {
        return value.length ? value[0].size <= 2000000 : true
      }),
    transcriptURL: string().required(),
    letterOfConsent: mixed()
      .required()
      .test("not uploaded", "ยังไม่ได้อัพโหลดไฟล์", value => {
        return value.length
      })
      .test("fileSize", "ขนาดไฟล์ใหญ่เกิน 2MB", value => {
        return value.length ? value[0].size <= 2000000 : true
      }),
    letterOfConsentURL: string().required()
  })
  .defined()

export type DocumentModel = yup.InferType<typeof DocumentSchema>

export default DocumentSchema
