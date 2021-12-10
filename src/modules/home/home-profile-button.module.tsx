import { Button, ButtonProps, makeStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { ApplicationStatus, useAnnounceContext } from "../../core/providers/announce.provider"
import { useAuthContext } from "../../core/providers/auth.provider"

import React from "react"
import { Link } from "react-router-dom"

export const HomeProfileButton: React.FC<ButtonProps> = props => {
  const { isLoggedIn, me } = useAuthContext()
  const { state } = useAnnounceContext()

  const getButtonLabel = () => {
    if (isLoggedIn) {
      if (me.data?.applicationState === "NOT_FILLED" || me.data?.applicationState === "DRAFT") {
        return "สมัครต่อจากครั้งที่แล้ว"
      }
      return "ตรวจสอบเอกสาร"
    }
    if (state === ApplicationStatus.LATE) return "หมดเขตรับสมัคร"
    if (state === ApplicationStatus.EARLY) return "เปิดรับสมัครวันที่ 15 พฤศจิกายน"
    return "สมัครเลย! วันนี้ - 15 ธันวาคม 2564"
  }

  const notAllow = state === ApplicationStatus.LATE || state === ApplicationStatus.EARLY

  return (
    <Link to="/profile" className="no-underline" style={{ pointerEvents: notAllow ? "none" : "initial" }}>
      <Button variant="contained" color="primary" disabled={notAllow} {...props}>
        {getButtonLabel()}
      </Button>
    </Link>
  )
}
