import { string, object } from "yup"
import yup from "yup"

const Answer2Schema = object()
  .shape({
    secondPart: object({
      answer1: string().trim().required("กรุณากรอกคำตอบ"),
      answer2: string().trim().required("กรุณากรอกคำตอบ"),
      answer3: string().trim().required("กรุณากรอกคำตอบ"),
      answer4: string().trim().required("กรุณากรอกคำตอบ"),
      answer5: string().trim().required("กรุณากรอกคำตอบ")
    }).required()
  })
  .defined()

export type Answer2Model = yup.InferType<typeof Answer2Schema>

export default Answer2Schema
