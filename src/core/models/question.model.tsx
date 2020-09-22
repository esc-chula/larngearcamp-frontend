import ChoiceModel from "./choice.model"

interface QuestionModel {
  question: string
  type: "multiline" | "checkbox" | "radio" | "ranking"
  caption?: string | null
  imagePath?: string | null
  contents?: Array<ChoiceModel>
  wordCount?: {
    min: number
    max: number
  }
}

export default QuestionModel
