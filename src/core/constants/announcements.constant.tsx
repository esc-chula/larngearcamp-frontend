import { AlertProps } from "@material-ui/lab"
import React from "react"

interface AnnouncementConstant {
  severity: AlertProps["severity"]
  variant: AlertProps["variant"]
  content: React.ReactNode
}

export const announcementConstant: AnnouncementConstant[] = [
  {
    severity: "error",
    variant: "standard",
    content: (
      <>
        ขอให้น้องผู้มีสิทธิ์เข้าค่ายทุกคน ดาวน์โหลดไฟล์{" "}
        <a
          href="/assets/file/ใบตอบรับผู้ปกครองเกี่ยวกับมาตรการรับมือโรคโควิด-19.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline">
          ใบตอบรับผู้ปกครองเกี่ยวกับมาตรการรับมือโรคโควิด-19
        </a>{" "}
        แล้วนำส่งใบตอบรับที่{" "}
        <a href="https://forms.gle/nne4CZdvxjVyQHG56" target="_blank" rel="noopener noreferrer" className="no-underline">
          Google Form
        </a>{" "}
        ภายในวันที่ 30 เมษายน 2565 ดูรายละเอียดเพิ่มเติมได้ที่เพจ{" "}
        <a href="https://www.facebook.com/LARNGEARCAMP" target="_blank" rel="noopener noreferrer" className="no-underline">
          LarnGear Camp
        </a>
      </>
    )
  },
  {
    severity: "error",
    variant: "standard",
    content: (
      <>
        สำหรับน้อง ๆ ที่ยังไม่ได้กรอก{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSenucmMqxoR1d41Gav5X-sr9gH49IuiUW-NH2Un2NlKEXnpwg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline">
          ฟอร์มยืนยันผลการฉีดวัคซีน
        </a>{" "}
        ขอให้น้อง ๆ กรอกภายในวันที่ 19 พฤษภาคม 2565
      </>
    )
  }
]
