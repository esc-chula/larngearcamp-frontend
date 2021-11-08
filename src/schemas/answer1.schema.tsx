import { string, object, boolean, number } from "yup"
import yup from "yup"

const Answer1Schema = object()
  .shape({
    firstPart: object()
      .shape({
        answer1: string().trim().required("กรุณากรอกคำตอบ"),
        answer2: object({
          first: string()
            .required()
            .matches(/^[1-5]$/, "กรอกได้เฉพาะเลข 1-5"),
          second: string()
            .required()
            .matches(/^[1-5]$/, "กรอกได้เฉพาะเลข 1-5"),
          third: string()
            .required()
            .matches(/^[1-5]$/, "กรอกได้เฉพาะเลข 1-5"),
          fourth: string()
            .required()
            .matches(/^[1-5]$/, "กรอกได้เฉพาะเลข 1-5"),
          fifth: string()
            .required()
            .matches(/^[1-5]$/, "กรอกได้เฉพาะเลข 1-5")
        })
          .required()
          .test("invalid", "กรุณากรอกให้ครบทุกช่อง ใส่ได้เฉพาะเลข 1-5 และไม่ซ้ำกัน", value => {
            let arr = ["1", "2", "3", "4", "5"]
            let result = [value?.first, value?.second, value?.third, value?.fourth, value?.fifth].sort().reduce((prev, curr, index) => {
              return prev && curr === arr[index]
            }, true)
            return result
          }),
        answer3: string().trim().required("กรุณากรอกคำตอบ"),
        answer4: object({
          first: boolean(),
          second: boolean(),
          third: boolean(),
          fourth: boolean(),
          fifth: object({
            text: string().optional(),
            checked: boolean().required()
          }).required(),
          sixth: object({
            text: string().optional(),
            checked: boolean().required()
          }).required()
        })
          .required()
          .test("required", "กรุณาเลือกคำตอบอย่างน้อย 1 ข้อ", value => {
            let booleanAnswer = [value?.first, value?.second, value?.third, value?.fourth].reduce((prev, curr) => {
              return !prev ? prev || !!curr : prev
            }, false)
            let stringAnswer = [value?.fifth?.text, value?.sixth?.text].reduce((prev, curr) => {
              return !prev ? prev || curr !== "" : prev
            }, false)
            return booleanAnswer || stringAnswer
          }),
        answer5: string().trim().required("กรุณากรอกคำตอบ"),
        answer6: string().required("กรุณาเลือกคำตอบ"),
        answer7: string().trim().required("กรุณากรอกคำตอบ")
      })
      .required()
  })
  .defined()

export type Answer1Model = yup.InferType<typeof Answer1Schema>

export default Answer1Schema
