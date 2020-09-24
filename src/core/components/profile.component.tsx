import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useAuthContext } from "../providers/auth.provider"
import MeDTO from "../models/dto/me.dto"
import { Typography } from "@material-ui/core"

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
    marginTop: theme.spacing(2)
  }
}))

const ProfileComponent = () => {
  const classes = useStyles()
  const { me } = useAuthContext()
  const {
    name: { first, last }
  } = me.data as MeDTO

  const fullName = `${first} ${last}`
  return (
    <>
      <div className={classes.profile}></div>
      <Typography variant="h5" align="center" className={classes.name}>
        {fullName}
      </Typography>
    </>
  )
}

export { ProfileComponent }
