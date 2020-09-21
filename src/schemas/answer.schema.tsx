import { string, object, number } from "yup"

const AnswerSchema = object().shape({
  firstPart: object({
    answer1: string().trim().required("กรุณากรอกคำตอบ"),
    answer2: object({
      first: string().required("กรุณากรอกคำตอบ"),
      second: string().required("กรุณากรอกคำตอบ"),
      third: string().required("กรุณากรอกคำตอบ"),
      fourth: string().required("กรุณากรอกคำตอบ"),
      fifth: object({
        order: string().required("กรุณากรอกคำตอบ"),
        value: string().trim().required("กรุณากรอกคำตอบ")
      })
    }),
    answer3: string().trim().required("กรุณากรอกคำตอบ"),
    answer4: object({
      first: number().required("กรุณากรอกคำตอบ"),
      second: number().required("กรุณากรอกคำตอบ"),
      third: number().required("กรุณากรอกคำตอบ"),
      forth: string().trim().required("กรุณากรอกคำตอบ"),
      fifth: string().trim().required("กรุณากรอกคำตอบ")
    }),
    answer5: string().trim().required("กรุณากรอกคำตอบ"),
    answer6: number().required("กรุณากรอกคำตอบ"),
    answer7: string().trim().required("กรุณากรอกคำตอบ")
  }),
  secondPart: object({
    answer1: string().trim().required("กรุณากรอกคำตอบ"),
    answer2: string().trim().required("กรุณากรอกคำตอบ"),
    answer3: string().trim().required("กรุณากรอกคำตอบ"),
    answer4: string().trim().required("กรุณากรอกคำตอบ"),
    answer5: string().trim().required("กรุณากรอกคำตอบ"),
    answer6: string().trim().required("กรุณากรอกคำตอบ")
  })
})

export default AnswerSchema
