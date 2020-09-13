import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  profile: {
    width: 200,
    height: 200,
    margin: "auto",
    background: "#181818",
    borderRadius: "100%",
    marginTop: theme.spacing(4)
  }
}))

const ProfileComponent = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.profile}></div>
    </>
  )
}

export { ProfileComponent }
