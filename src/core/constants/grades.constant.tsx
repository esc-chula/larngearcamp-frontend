import SelectModel from "../models/select.model"

const gradesConstant: SelectModel = {
  name: "education",
  label: "ระดับชั้น",
  contents: [
    { text: "ม.4 หรือเทียบเท่า", value: "มัธยมศึกษาปีที่ 4" },
    { text: "ม.5 หรือเทียบเท่า", value: "มัธยมศึกษาปีที่ 5" },
    { text: "ปวช. ปี1", value: "ปวช. ปี1" },
    { text: "ปวช. ปี2", value: "ปวช. ปี2" }
  ]
}

export { gradesConstant }
