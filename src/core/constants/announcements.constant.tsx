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
        <a href="/assets/file/หนังสือรับทราบและยินยอมปฏิบัติตามมาตรการ.pdf" target="_blank" rel="noopener noreferrer" className="no-underline">
          หนังสือรับทราบและยินยอมปฏิบัติตามมาตรการการป้องกันโรคติดเชื้อไวรัสโคโรนา 2019
        </a>{" "}
        แล้วนำส่งใบตอบรับที่{" "}
        <a href="https://forms.gle/cDWLrLLq8iqRngkQ7" target="_blank" rel="noopener noreferrer" className="no-underline">
          Google Form
        </a>{" "}
        ภายในวันที่ 4 มกราคม 2566 ดูรายละเอียดเพิ่มเติมได้ที่เพจ{" "}
        <a href="https://www.facebook.com/LARNGEARCAMP" target="_blank" rel="noopener noreferrer" className="no-underline">
          Larngear Camp
        </a>
      </>
    )
  }
]
