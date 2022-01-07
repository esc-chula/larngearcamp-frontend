import { Button, ButtonProps } from "@material-ui/core"
import { ApplicationStatus, useAnnounceContext } from "../../core/providers/announce.provider"
import { useAuthContext } from "../../core/providers/auth.provider"

import React, { useMemo } from "react"
import { Link } from "react-router-dom"

export const HomeProfileButton: React.FC<ButtonProps> = props => {
  const { isLoggedIn, me } = useAuthContext()
  const { state } = useAnnounceContext()

  const getButtonLabel = () => {
    if (isLoggedIn) {
      const isNotSubmit = me.data?.applicationState === "DRAFT" || me.data?.applicationState === "NOT_FILLED"
      if (state !== ApplicationStatus.APPLICABLE && isNotSubmit) {
        return "หมดเขตรับสมัคร"
      } else if (state === ApplicationStatus.DOCUMENT_EDIT && !isNotSubmit) {
        return "ตรวจสอบเอกสาร"
      } else if (state === ApplicationStatus.APPLICABLE && !isNotSubmit) {
        return "สมัครต่อจากครั้งที่แล้ว"
      }
    }
    if (state === ApplicationStatus.LATE || state === ApplicationStatus.DOCUMENT_EDIT) return "หมดเขตรับสมัคร"
    if (state === ApplicationStatus.EARLY) return "เปิดรับสมัครวันที่ 15 พฤศจิกายน"
    return "สมัครเลย! วันนี้ - 15 ธันวาคม 2564"
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
