import SelectModel from "../models/select.model"

const bloodGroupsConstant: SelectModel = {
  name: "health.bloodType",
  label: "หมู่เลือด",
  contents: [
    { text: "A", value: "A" },
    { text: "B", value: "B" },
    { text: "AB", value: "AB" },
    { text: "O", value: "O" },
    { text: "ไม่ทราบ", value: "ไม่ทราบ" }
  ]
}

export { bloodGroupsConstant }
