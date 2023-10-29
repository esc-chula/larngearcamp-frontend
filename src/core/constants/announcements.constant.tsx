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
    content: <>สำหรับน้อง ๆ ที่ผ่านรอบสัมภาษณ์ อย่าลืมชำระเงินเพื่อยืนยันสิทธิ์การเข้าร่วมค่าย ภายในวันที่ 19 พฤษจิกายน 2566 นะครับ</>
  }
]
