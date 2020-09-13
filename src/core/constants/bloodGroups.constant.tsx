import SelectModel from "../models/select.model"

const bloodGroupsConstant: SelectModel = {
  name: "bloodGroup",
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
