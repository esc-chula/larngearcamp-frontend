import { Avatar, makeStyles } from "@material-ui/core"
import React from "react"
import MeDTO from "../models/dto/me.dto"
import { useAuthContext } from "../providers/auth.provider"

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 200,
    height: 200,
    margin: "0 auto",
    fontSize: 72
  }
}))

const UserAvatar: React.FC = () => {
  const classes = useStyles()
  const { me } = useAuthContext()
  const {
    name: { first },
    application
  } = me.data as MeDTO

  if (!application) {
    return <Avatar className={classes.avatar}>{first[0]}</Avatar>
  }

  const { picture } = application

  return <Avatar className={classes.avatar} src={picture} />
}

export { UserAvatar }
