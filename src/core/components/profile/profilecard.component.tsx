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
    borderRadius: "10px"
  },
  profile: {
    background: "#181818",
    borderRadius: "100%"
  },
  text: {
    textAlign: "left",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
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
    justifyContent: "center",
    flexWrap: "wrap",
    flexGrow: 1
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },
  container: {
    width: 140,
    height: 140,
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      width: 130,
      height: 130
    }
  }
}))

const ProfileComponent: React.FC = () => {
  const classes = useStyles()
  // const { me } = useAuthContext()
  // const {
  //   name: { first, last },
  //   application
  // } = me.data as MeDTO

  // const fullName = `${first} ${last}`
  const fullName = "นายลานเกียร์ สุดลึกล้ำเหลือกำหนด"
  return (
    <Card className={`${classes.card} ${classes.flexRow}`}>
      <div className={classes.container}>
        <UserAvatar className={classes.profile} width="100%" height="100%" />
      </div>
      <div className={classes.flexCol}>
        <Typography variant="h4" className={`${classes.text} ${classes.appcode}`}>
          B-2569
        </Typography>
        <Typography variant="h4" className={`${classes.text} ${classes.name}`}>
          {fullName}
        </Typography>
      </div>
    </Card>
  )
}
/*
<>
      <div className={classes.flexRow}>
        <div className={classes.container}>
          <UserAvatar className={classes.profile} width="100%" height="100%" />
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
*/

export default ProfileComponent
