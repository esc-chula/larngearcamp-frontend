import SelectModel from "../models/select.model"

const interviewAvailabilityConstant: SelectModel = {
  name: "misc.interviewAvailability",
  label: "หากผ่านการคัดเลือก น้องสะดวกมาสัมภาษณ์ที่คณะวิศวฯ จุฬาฯ วันที่ 21 ตุลาคม 2566 หรือไม่",
  contents: [
    { text: "สะดวก", value: "AVAILABLE" },
    { text: "ไม่สะดวก", value: "UNAVAILABLE" },
    { text: "ไม่แน่ใจ", value: "NOT_SURE" }
  ]
}

export { interviewAvailabilityConstant }
