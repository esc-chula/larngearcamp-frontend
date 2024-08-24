import SelectModel from "../models/select.model"

const shirtSizeConstant: SelectModel = {
  name: "shirtSize",
  label: "ไซส์เสื้อ",
  contents: [
    { text: "Size S (อก 33 นิ้ว / ยาว 25 นิ้ว)", value: "S" },
    { text: "Size M (อก 36 นิ้ว / ยาว 26 นิ้ว)", value: "M" },
    { text: "Size L (อก 40 นิ้ว / ยาว 29 นิ้ว)", value: "L" },
    { text: "Size XL (อก 44 นิ้ว / ยาว 29.5 นิ้ว)", value: "XL" },
    { text: "Size 2XL (อก 48 นิ้ว / ยาว 30 นิ้ว)", value: "2XL" },
    { text: "Size 3XL (อก 52 นิ้ว / ยาว 31 นิ้ว)", value: "3XL" }
  ]
}

export { shirtSizeConstant }
