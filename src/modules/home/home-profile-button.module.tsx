import { Button, ButtonProps } from "@material-ui/core"
import { ApplicationStatus, useAnnounceContext } from "../../core/providers/announce.provider"
import { useAuthContext } from "../../core/providers/auth.provider"

import React, { useMemo } from "react"
import { Link } from "react-router-dom"

export const HomeProfileButton: React.FC<ButtonProps> = props => {
  const { isLoggedIn, me } = useAuthContext()
  const { state } = useAnnounceContext()

  const getButtonLabel = () => {
    const nowDate = new Date()
    const endFakeDate = new Date("September 15, 2024 00:00:00 GMT+07:00")
    if (isLoggedIn) {
      const isNotSubmit = me.data?.applicationState === "DRAFT" || me.data?.applicationState === "NOT_FILLED"
      if (state === ApplicationStatus.EARLY) {
        return "เปิดรับสมัคร 2 กันยายน 2567 นี้"
      } else if (state !== ApplicationStatus.APPLICABLE && isNotSubmit) {
        return "หมดเขตรับสมัคร"
      } else if (state === ApplicationStatus.DOCUMENT_EDIT && !isNotSubmit) {
        return "ตรวจสอบเอกสาร"
      } else if (state === ApplicationStatus.APPLICABLE && !isNotSubmit) {
        return "สมัครต่อจากครั้งที่แล้ว"
      }
    }
    if (state === ApplicationStatus.LATE || state === ApplicationStatus.DOCUMENT_EDIT) return "หมดเขตรับสมัคร"
    if (state === ApplicationStatus.EARLY) return "เปิดรับสมัครเร็ว ๆ นี้"
    if (state === ApplicationStatus.APPLICABLE && nowDate <= endFakeDate) return "สมัครเลย! วันนี้ - 15 กันยายน 2567"
    return "สมัครเลย! วันนี้ - 20 กันยายน 2567"
  }

  const notAllow = useMemo(() => {
    const isNotSubmit = me.data?.applicationState === "DRAFT" || me.data?.applicationState === "NOT_FILLED"

    if (state === ApplicationStatus.LATE || state === ApplicationStatus.EARLY) return true
    if (state === ApplicationStatus.APPLICABLE) return false
    if (state === ApplicationStatus.DOCUMENT_EDIT && !isNotSubmit && me.data?.applicationState) return false
    return true
  }, [me.data, state])

  return (
    <Link to="/profile" className="no-underline" style={{ pointerEvents: notAllow ? "none" : "initial" }}>
      <Button variant="contained" color="primary" disabled={notAllow} {...props}>
        {getButtonLabel()}
      </Button>
    </Link>
  )
}
