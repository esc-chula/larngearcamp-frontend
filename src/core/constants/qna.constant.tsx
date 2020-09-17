import QandAModel from "../models/qna.model"

const qandAConstant: Array<QandAModel> = [
  {
    title: "ศึกษาอยู่ระดับชั้นไหนจะสมัครเข้าร่วมได้บ้าง",
    contents: ["ค่ายลานเกียร์เปิดโอกาสให้น้องๆ ที่เรียนอยู่ชั้น ม.4 - 5 หรือ ปวช. ปี 1 - 2 หรือเทียบเท่าครับ"]
  },
  {
    title: "สมัครก่อนมีสิทธิ์ได้ก่อนหรือเปล่า",
    contents: ["ไม่มีผลครับ พี่ๆ จะคัดเลือกจากคำตอบที่น้องๆ เขียนมาในใบสมัครครับ พี่ ๆ รออ่านอยู่นะครับ"]
  },
  {
    title: "ค่าสมัครเท่าไร",
    contents: ["สมัครฟรีครับ แต่สำหรับน้องๆ ที่ผ่านรอบสัมภาษณ์ และเป็นผู้มีสิทธิ์เข้าร่วมค่าย จะมีค่าใช้จ่าย 500 บาทครับ"]
  },
  {
    title: "ถ้าเคยสมัครปีที่แล้ว ปีนี้ต้องกรอกข้อมูลใหม่ไหม",
    contents: ["ต้องกรอกข้อมูลใหม่ และต้องไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อนด้วยนะครับ"]
  },
  {
    title: "ถ้าขอใบ ปพ. ไม่ทัน ต้องทำอย่างไร",
    contents: [
      "กรณีขอใบ ปพ. ไม่ทัน ให้ส่งเอกสารในลักษณะนี้อย่างใดอย่างหนึ่งแทน",
      "- ใบ ปพ.1 ที่มีผลการเรียน ม.ต้น ครบทั้ง 6 ภาคเรียน (สำหรับน้อง ม.4)",
      "- ใบ ปพ.1 ที่มีผลการเรียน ม.4 ทั้ง 2 ภาคเรียน (สำหรับน้อง ม.5)",
      "- ใบ ปพ.7 ที่ยังไม่หมดอายุ หรือ หมดอายุไม่เกิน 1 เดือน",
      "- ผลสอบกลางภาคเรียนที่ 1 ในระดับชั้นที่กำลังศึกษา (ม.4 ใช้คะแนนสอบกลางภาค ม.4 เทอม 1 เป็นต้น)",
      "- บัตรประจำตัวนักเรียนที่แสดงชัดเจนว่ากำลังศึกษาอยู่ในระดับชั้นดังกล่าว"
    ]
  }
]

export { qandAConstant }
