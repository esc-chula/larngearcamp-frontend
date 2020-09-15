interface QuestionModel {
  question: string
  type: "multiline" | "checkbox" | "radio" | "sequence"
  caption?: string | null
  imagePath?: string | null
  contents?: Array<{
    title?: string
    textfield?: boolean
  }>
}

export default QuestionModel
