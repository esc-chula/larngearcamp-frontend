import { string, object } from "yup"
import yup from "yup"

const Answer2Schema = object()
  .shape({
    answer1: string()
      .trim()
      .required("กรุณากรอกคำตอบ")
      .matches(/^[\s\S]{150,250}$/, "จำกัดจำนวนตัวอักษร 150-250 ตัว"),
    answer2: string().trim().required("กรุณากรอกคำตอบ"),
    answer3: string().trim().required("กรุณากรอกคำตอบ"),
    answer4: string()
      .trim()
      .required("กรุณากรอกคำตอบ")
      .matches(/^[\s\S]{100,200}$/, "จำกัดจำนวนตัวอักษร 100-200 ตัว"),
    answer5: string().trim().required("กรุณากรอกคำตอบ"),
    answer6: string().trim().required("กรุณากรอกคำตอบ")
  })
  .defined()

export type Answer2Model = yup.InferType<typeof Answer2Schema>

export default Answer2Schema
