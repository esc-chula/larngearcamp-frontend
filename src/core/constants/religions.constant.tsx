import SelectModel from "../models/select.model"

const religionsConstant: SelectModel = {
  name: "religion",
  contents: [
    { text: "พุทธ", value: "พุทธ" },
    { text: "คริสต์", value: "คริสต์" },
    { text: "อิสลาม", value: "อิสลาม" },
    { text: "พราหมณ์-ฮินดู", value: "พราหมณ์-ฮินดู" }
  ]
}

export { religionsConstant }
