import ChoiceModel from "./choice.model"

interface QuestionModel {
  question: string
  type: "multiline" | "checkbox" | "radio" | "ranking"
  caption?: string | null
  imagePath?: string | null
  contents?: Array<ChoiceModel>
}

export default QuestionModel
