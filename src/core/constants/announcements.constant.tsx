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
        สำหรับน้อง ๆ คนใดที่ในขณะนี้ยังมีเอกสารการสมัครที่ไม่พร้อมส่ง ให้ส่งไฟล์เปล่าของอะไรก็ได้เข้ามาก่อน และ เมื่อสมัครเรียบร้อย
        จะมีเวลาให้แก้เอกสารอีกครั้ง
      </>
    )
  }
]
