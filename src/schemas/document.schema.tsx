import { object, string } from "yup"
import yup from "yup"

const urlTest = string()
  .required("ยังไม่ได้อัพโหลดไฟล์")
  .test("not default", "ยังไม่ได้อัพโหลดไฟล์", value => {
    return !!value && value !== ""
  })

const DocumentSchema = object()
  .shape({
    photoURL: urlTest,
    transcriptURL: urlTest,
    parentalConsentURL: urlTest
  })
  .defined()

export type DocumentModel = yup.InferType<typeof DocumentSchema>

export default DocumentSchema
