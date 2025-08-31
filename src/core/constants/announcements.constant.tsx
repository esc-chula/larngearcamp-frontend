import { AlertProps } from "@material-ui/lab"
import React from "react"

interface AnnouncementConstant {
  severity: AlertProps["severity"]
  variant: AlertProps["variant"]
  content: React.ReactNode
}

export const announcementConstant: AnnouncementConstant[] = [
  // {
  //   severity: "warning",
  //   variant: "standard",
  //   content: <>ขยายช่วงวันแก้ไขเอกสาร จากวันที่ 30 กันยายน เป็น วันที่ 4 ตุลาคม แทนนะครับ</>
  // }
]
