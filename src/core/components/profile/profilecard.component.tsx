import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useAuthContext } from "../../providers/auth.provider"
import MeDTO from "../../models/dto/me.dto"
import { Typography, Card } from "@material-ui/core"
import { UserAvatar } from "./userAvatar.component"

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4),
    boxShadow: "0px 100px 257px rgba(0, 0, 0, 0.07), 0px 18.576px 34.4894px rgba(0, 0, 0, 0.0269069)",
    borderRadius: "10px",
    margin: theme.spacing(2.25)
  },
  profile: {
    background: "#181818",
    borderRadius: "100%"
  },
  text: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  appcode: {
    color: "#BFBFBF" //theme.palette.gray[200]
  },
  name: {
    color: "#404040" //theme.palette.gray[700]
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    flexWrap: "wrap",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center"
    }
  },
  container: {
    width: 140,
    height: 140,
    marginRight: theme.spacing(5.75),
    [theme.breakpoints.down("sm")]: {
      width: 130,
      height: 130,
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(5)
    }
  }
}))

interface ProfileCardProps {
  lgCode: string
  fullName: string
}

const ProfileComponent: React.FC<ProfileCardProps> = ({ lgCode, fullName }) => {
  const classes = useStyles()
  // const { me } = useAuthContext()
  // const {
  //   name: { first, last },
  //   application
  // } = me.data as MeDTO

  // const fullName = `${first} ${last}`
  return (
    <Card className={`${classes.card} ${classes.flexRow}`}>
      <div className={classes.container}>
        <UserAvatar className={classes.profile} width="100%" height="100%" />
      </div>
      <div className={classes.flexCol}>
        <Typography variant="h4" className={`${classes.text} ${classes.appcode}`}>
          {lgCode}
        </Typography>
        <Typography variant="h4" className={`${classes.text} ${classes.name}`}>
          {fullName}
        </Typography>
      </div>
    </Card>
  )
}

export default ProfileComponent
