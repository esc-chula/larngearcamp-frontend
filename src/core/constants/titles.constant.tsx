import SelectModel from "../models/select.model"

const titlesConstant: SelectModel = {
  name: "title",
  label: "คำนำหน้า",
  contents: [
    { text: "เด็กชาย", value: "เด็กชาย" },
    { text: "เด็กหญิง", value: "เด็กหญิง" },
    { text: "นาย", value: "นาย" },
    { text: "นางสาว", value: "นางสาว" }
  ]
}

export { titlesConstant }
