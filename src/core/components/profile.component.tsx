import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useAuthContext } from "../providers/auth.provider"
import MeDTO from "../models/dto/me.dto"
import { Typography } from "@material-ui/core"
import { UserAvatar } from "./userAvatar.component"

const useStyles = makeStyles(theme => ({
  profile: {
    width: 200,
    height: 200,
    margin: "auto",
    background: "#181818",
    borderRadius: "100%",
    marginTop: theme.spacing(4)
  },
  name: {
    color: "#EEEEEE",
    margin: `${theme.spacing(2)}px 0 0 ${theme.spacing(8)}px`
  },
  container: {
    marginTop: theme.spacing(4)
  },
  flexRow: {
    width: "fit-content",
    margin: "0 auto",
    display: "flex",
    alignItems: "center"
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}))

const ProfileComponent: React.FC = () => {
  const classes = useStyles()
  const { me } = useAuthContext()
  const {
    name: { first, last },
    application
  } = me.data as MeDTO

  const fullName = `${first} ${last}`
  return (
    <div className={classes.container}>
      <div className={classes.flexRow}>
        <UserAvatar width="200px" height="200px" />
        <div className={classes.flexCol}>
          <Typography variant="h4" className={classes.name}>
            {fullName}
          </Typography>
          {application && application.code && (
            <Typography variant="h4" className={classes.name}>
              {application.code}
            </Typography>
          )}
        </div>
      </div>
    </div>
  )
}

export { ProfileComponent }
