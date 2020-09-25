import React from "react"
import { makeStyles } from "@material-ui/core"
import { PropsWithChildren } from "react"

export const safeArea = {
  paddingLeft: "env(safe-area-inset-left)",
  paddingRight: "env(safe-area-inset-right)"
}

const useStyles = makeStyles({
  safeArea
})

const SafeArea: React.FC<PropsWithChildren<{ className?: string; disable?: boolean }>> = ({ className = "", disable = false, children }) => {
  const classes = useStyles()
  const safeAreaClassName = disable ? undefined : classes.safeArea
  return <div className={`${safeAreaClassName} ${className}`}>{children}</div>
}

export { SafeArea }
