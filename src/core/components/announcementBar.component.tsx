import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { Alert, AlertProps } from "@material-ui/lab"

const useStyle = makeStyles(theme => ({
  announcement: {
    marginBottom: theme.spacing(2),
    "& a": {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      textDecoration: "underline",
      display: "inline-block"
    }
  }
}))

interface AnnouncementBarProps extends AlertProps {}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  severity = "error",
  variant = "standard",
  children,
  className
}: AnnouncementBarProps) => {
  const classes = useStyle()

  return (
    <Alert severity={severity} variant={variant} className={className ? `${className} ${classes.announcement}` : classes.announcement}>
      <Typography variant="body1">{children}</Typography>
    </Alert>
  )
}
