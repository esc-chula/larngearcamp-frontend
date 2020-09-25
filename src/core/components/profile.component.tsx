import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useAuthContext } from "../providers/auth.provider"
import MeDTO from "../models/dto/me.dto"
import { Typography } from "@material-ui/core"
import { UserAvatar } from "./userAvatar.component"

const useStyles = makeStyles(theme => ({
  profile: {
    background: "#181818",
    borderRadius: "100%"
  },
  name: {
    textAlign: "center",
    color: "#EEEEEE",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexGrow: 1,
    margin: theme.spacing(3, 5, 0, 5)
  },
  flexCol: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    width: 140,
    height: 140,
    margin: theme.spacing(0, 3, 0, 0),
    [theme.breakpoints.down("sm")]: {
      width: 130,
      height: 130
    }
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
    <>
      <div className={classes.flexRow}>
        <div className={classes.container}>
          <UserAvatar className={classes.profile} />
        </div>
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
    </>
  )
}

export { ProfileComponent }
