import SelectModel from "../models/select.model"

const bloodGroupsConstant: SelectModel = {
  name: "health.bloodType",
  label: "หมู่เลือด",
  contents: [
    { text: "A+", value: "A+" },
    { text: "A-", value: "A+" },
    { text: "B+", value: "B+" },
    { text: "B-", value: "B-" },
    { text: "AB+", value: "AB+" },
    { text: "O+", value: "O+" },
    { text: "O-", value: "O-" }
  ]
}

export { bloodGroupsConstant }
