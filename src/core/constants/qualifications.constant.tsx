export interface QualificationModel {
  description: string
  src: string
}

const qualificationsConstant: Array<QualificationModel> = [
  {
    description: "กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5 ปวช. ปีที่ 1 - 2 หรือมีวุฒิเทียบเท่า",
    src: require("../../assets/images/icon/qualification-1.svg")
  },
  {
    description: "ไม่ป่วยเป็นโรคติดต่อร้ายแรง",
    src: require("../../assets/images/icon/qualification-2.svg")
  },
  {
    description: "สามารถเข้าร่วมกิจกรรม ณ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยได้ตลอดระยะเวลาจัดค่าย",
    src: require("../../assets/images/icon/qualification-3.svg")
  },
  {
    description: "ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน (ยกเว้น น้อง ๆ ที่ผ่านการคัดเลือกเข้าค่ายลานเกียร์ครั้งที่ 20 สามารถสมัครได้อยู่)",
    src: require("../../assets/images/icon/qualification-4.svg")
  },
  {
    description:
      "จะต้องได้รับวัคซีนที่ทางราชการกำหนดอย่างน้อยสองเข็ม หรือวัคซีนชนิดอื่นที่สำนักงานคณะกรรมการอาหารและยารับรองตามจำนวนที่กำหนด แล้วแต่กรณี ก่อนวันที่ 19 พฤษภาคม 2565 (14 วัน ก่อนวันค่ายวันแรก)",
    src: require("../../assets/images/icon/qualification-4.svg")
  }
]

export default qualificationsConstant
