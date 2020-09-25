import { makeStyles, Paper, Typography } from "@material-ui/core"
import React from "react"
import statusInfoConstant from "../constants/statusInfo.constant"
import MeDTO from "../models/dto/me.dto"
import { ProfileStatus } from "../models/statusInfo.model"
import { useAuthContext } from "../providers/auth.provider"
import { FacebookButtonComponent } from "./facebookButton.component"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4)
    },
    padding: theme.spacing(3)
  },
  title: {
    fontWeight: 500
  },
  content: {
    fontWeight: 300,
    marginTop: theme.spacing(2)
  },
  button: {
    width: "250px"
  },
  flex: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  bold: {
    fontWeight: 500
  }
}))

interface StatusInfoProps {
  profileStatus: ProfileStatus
}

const StatusInfo: React.FC<StatusInfoProps> = ({ profileStatus }) => {
  const classes = useStyles()
  const { me } = useAuthContext()
  const { application } = me.data as MeDTO

  const showFB = profileStatus === "failedInterview" || profileStatus === "passedFinal" || profileStatus === "failedFinal"

  if (profileStatus !== "docNotOk" && profileStatus !== "passedInterview") {
    return (
      <Paper elevation={1} className={classes.paper}>
        <Typography variant="h5" className={classes.title} dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].title }} />
        {statusInfoConstant[profileStatus].contents.map((content, index) => (
          <Typography key={index} variant="body1" className={classes.content} dangerouslySetInnerHTML={{ __html: content }} />
        ))}
        {showFB && (
          <div className={classes.flex}>
            <FacebookButtonComponent variant="contained" className={classes.button}>
              LARNGEAR CAMP
            </FacebookButtonComponent>
          </div>
        )}
      </Paper>
    )
  }
  if (profileStatus === "passedInterview") {
    const { code } = application!
    const interviewInfo =
      code[0] === "A" || code[0] === "C"
        ? `จะจัดขึ้นในวันที่ <span class="${classes.bold}">31 ตุลาคม 2563</span> ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย แล้วเจอกันนะครับ :)`
        : `จะอยู่ในช่วงวันที่ <span class="${classes.bold}">2-8 พฤศจิกายน 2563</span> โดยพี่ ๆ ค่ายลานเกียร์จะโทรสัมภาษณ์ทางเบอร์โทรศัพท์มือถือที่น้องได้กรอกไว้ ขอให้น้องคอยรอรับสายจากพี่ ๆ ด้วยนะครับ :)`
    return (
      <Paper elevation={1} className={classes.paper}>
        <Typography variant="h5" className={classes.title} dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].title }} />
        <Typography
          variant="body1"
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].contents[0] + interviewInfo }}
        />
      </Paper>
    )
  }
  return null
}

export { StatusInfo }
