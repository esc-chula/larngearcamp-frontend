import SelectModel from "../models/select.model"

const gradesConstant: SelectModel = {
  name: "grade",
  contents: [
    { text: "ม.4", value: "มัญยมศึกษาปีที่ 4" },
    { text: "ม.5", value: "มัญยมศึกษาปีที่ 5" },
    { text: "ม.6", value: "มัญยมศึกษาปีที่ 6" }
  ]
}

export { gradesConstant }
