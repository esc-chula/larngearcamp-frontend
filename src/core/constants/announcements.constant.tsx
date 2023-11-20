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
    content: <>น้อง ๆ ที่ชำระค่าเข้าค่ายแล้ว อย่าลืมกรอกฟอร์มยินยอมมาตรการป้องกันโควิดนะครับ</>
  }
]
