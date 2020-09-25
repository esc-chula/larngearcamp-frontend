import SelectModel from "../models/select.model"

const religionsConstant: SelectModel = {
  name: "religion",
  label: "ศาสนา",
  contents: [
    { text: "พุทธ", value: "พุทธ" },
    { text: "คริสต์", value: "คริสต์" },
    { text: "อิสลาม", value: "อิสลาม" },
    { text: "ไม่ระบุ", value: "ไม่ระบุ" },
    { text: "อื่น ๆ", value: "อื่น ๆ" }
  ]
}

export { religionsConstant }
