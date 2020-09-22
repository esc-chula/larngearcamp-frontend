import { string, object, boolean } from "yup"

const AnswerSchema = object().shape({
  firstPart: object({
    answer1: string().trim().required("กรุณากรอกคำตอบ"),
    answer2: object({
      first: string()
        .required()
        .matches(/^[1-4]$/, "กรอกได้เฉพาะเลข 1-4"),
      second: string()
        .required()
        .matches(/^[1-4]$/, "กรอกได้เฉพาะเลข 1-4"),
      third: string()
        .required()
        .matches(/^[1-4]$/, "กรอกได้เฉพาะเลข 1-4"),
      fourth: string()
        .required()
        .matches(/^[1-4]$/, "กรอกได้เฉพาะเลข 1-4")
    }).test("invalid", "กรุณากรอกให้ครบทุกช่อง ใส่ได้เฉพาะเลข 1-4 และไม่ซ้ำกัน", value => {
      let arr = ["1", "2", "3", "4"]
      let result = [value?.first, value?.second, value?.third, value?.fourth].sort().reduce((prev, curr, index) => {
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
        text: string(),
        checked: boolean()
      }),
      sixth: object({
        text: string(),
        checked: boolean()
      })
    }).test("required", "กรุณาเลือกคำตอบอย่างน้อย 1 ข้อ", value => {
      let booleanAnswer = [value?.first, value?.second, value?.third, value?.fourth].reduce((prev, curr) => {
        return !prev ? prev || !!curr : prev
      }, false)
      let stringAnswer = [value?.fifth?.text, value?.sixth?.text].reduce((prev, curr) => {
        return !prev ? prev || curr !== "" : prev
      }, false)
      return booleanAnswer || stringAnswer
    }),
    answer5: string().trim().required("กรุณากรอกคำตอบ"),
    answer6: string().required("กรุณากรอกคำตอบ"),
    answer7: string().trim().required("กรุณากรอกคำตอบ")
  }),
  secondPart: object({
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
})

export default AnswerSchema
