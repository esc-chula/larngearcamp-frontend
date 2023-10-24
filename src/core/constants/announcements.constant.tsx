import { AlertProps } from "@material-ui/lab"
import React from "react"

interface AnnouncementConstant {
  severity: AlertProps["severity"]
  variant: AlertProps["variant"]
  content: React.ReactNode
}

export const announcementConstant: AnnouncementConstant[] = [
  {
    severity: "warning",
    variant: "standard",
    content: (
      <>
        สำหรับน้อง ๆ ที่มีสิทธิ์สัมภาษณ์ อย่าลืมกรอกไซส์เสื้อตัวเอง และน้องคนไหนที่ยังไม่ได้สัมภาษณ์ อย่าลืมตรวจสอบเวลาสัมภาษณ์รอบเก็บตก
        ผ่านทางเว็บนี้นะครับ
      </>
    )
  }
]
