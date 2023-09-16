import SelectModel from "../models/select.model"

const interviewAvailabilityConstant: SelectModel = {
  name: "misc.interviewAvailability",
  label: "",
  contents: [
    { text: "สะดวก", value: "AVAILABLE" },
    { text: "ไม่สะดวกเนื่องจากอยู่ต่างจังหวัด", value: "UPCOUNTRY" },
    { text: "ไม่สะดวกเนื่องจากเหตุผลอื่น", value: "UNAVAILABLE" },
    { text: "ยังไม่แน่ใจ", value: "NOT_SURE" }
  ]
}

export { interviewAvailabilityConstant }
