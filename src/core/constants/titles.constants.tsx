import SelectModel from "../models/select.model"

const titlesConstant: SelectModel = {
  name: "title",
  label: "คำนำหน้า",
  contents: [
    { text: "ด.ช.", value: "เด็กชาย" },
    { text: "ด.ญ.", value: "เด็กหญิง" },
    { text: "นาย", value: "นาย" },
    { text: "นางสาว", value: "นางสาว" }
  ]
}

export { titlesConstant }
