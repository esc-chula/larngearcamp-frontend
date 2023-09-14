import SelectModel from "../models/select.model"

const interviewAvailabilityConstant: SelectModel = {
  name: "misc.interviewAvailability",
  label: "",
  contents: [
    { text: "สะดวก", value: "AVAILABLE" },
    { text: "ไม่สะดวก", value: "UNAVAILABLE" },
    { text: "ไม่แน่ใจ", value: "NOT_SURE" }
  ]
}

export { interviewAvailabilityConstant }
