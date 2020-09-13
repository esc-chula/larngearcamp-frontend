import SelectModel from "../models/select.model"

const relationsConstant: SelectModel = {
  name: "relation",
  label: "ความเกี่ยวข้อง",
  contents: [
    { text: "บิดา", value: "บิดา" },
    { text: "มารดา", value: "มารดา" },
    { text: "ญาติ", value: "ญาติ" }
  ]
}

export { relationsConstant }
