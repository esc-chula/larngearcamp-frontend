import { Avatar, Box, BoxProps, makeStyles } from "@material-ui/core"
import React from "react"
import MeDTO from "../../models/dto/me.dto"
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
  // const { me } = useAuthContext()
  // const {
  //   name: { first },
  //   application
  // } = me.data as MeDTO

  // if (!application) {
  return (
    <Box {...props}>
      <Avatar className={classes.avatar} alt="user">
        ล
      </Avatar>
    </Box>
    // <Box {...props}>
    //   <Avatar className={classes.avatar} alt="user">
    //     {first[0]}
    //   </Avatar>
    // </Box>
  )
  // }

  //   const { picture } = application

  //   return (
  //     <Box {...props}>
  //       <Avatar className={classes.avatar} src={picture} />
  //     </Box>
  //   )
}

export { UserAvatar }
