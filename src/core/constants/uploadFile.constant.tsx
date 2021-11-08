import UploadFileModel from "../models/uploadFile.model"

const uploadFileConstant: Array<UploadFileModel> = [
  {
    name: "photo",
    body1: "รูปถ่ายผู้สมัคร (รูปถ่ายหน้าตรง เห็นหน้าชัดเจน เช่น รูปติดบัตร เป็นต้น)",
    body2: "ไฟล์รูปภาพประเภท .jpg / .png ขนาดไม่เกิน 2 MB",
    accept: "image/jpeg, image/png",
    size: 2000000
  },
  {
    name: "parentalConsent",
    body1: "หนังสือรับรองจากผู้ปกครองเพื่อเข้าร่วมค่ายลานเกียร์ครั้งที่ 20",
    body2: "ไฟล์ประเภท .pdf / .jpg / .png ขนาดไม่เกิน 2 MB",
    accept: "application/pdf, image/jpeg, image/png",
    size: 2000000
  },
  {
    name: "transcript",
    body1: "ใบ ปพ. 1 หรือ ปพ.7 หรือ เอกสารยืนยันตัวตนอื่นๆ",
    body2: "ไฟล์ประเภท .pdf / .jpg / .png ขนาดไม่เกิน 2 MB",
    accept: "application/pdf, image/jpeg, image/png",
    size: 2000000
  }
]

export { uploadFileConstant }
