import { Avatar, Box, BoxProps, makeStyles } from "@material-ui/core"
import React from "react"
import { useAuthContext } from "../../providers/auth.provider"

const useStyles = makeStyles(theme => ({
  avatar: {
    width: "100%",
    height: "100%",
    fontSize: 72
  }
}))

const UserAvatar: React.FC<BoxProps> = props => {
  const classes = useStyles()
  const { me } = useAuthContext()
  const { picture, firstname } = me.data!

  if (!picture) {
    return (
      <>
        <Box {...props}>
          <Avatar className={classes.avatar} alt="user">
            {firstname[0]}
          </Avatar>
        </Box>
      </>
    )
  }

  return (
    <Box {...props}>
      <Avatar className={classes.avatar} src={picture} />
    </Box>
  )
}

export { UserAvatar }
