import { Button, makeStyles, Card, Typography, Box } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import statusInfoConstant from "../../constants/statusInfo.constant"

//TODO: rename
import { ProfileStatus } from "../../models/statusInfo.model"
import { useApplicationStateContext } from "../../providers/applicationState.provider"

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4),
    boxShadow: "0px 100px 257px rgba(0, 0, 0, 0.07), 0px 18.576px 34.4894px rgba(0, 0, 0, 0.0269069)",
    borderRadius: "10px",
    margin: theme.spacing(2.25)
  },
  stepNo: {
    background: theme.palette.primary.main,
    color: "#FFFFFF", //theme.palette.gray[0]
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 56,
    height: 56,
    margin: theme.spacing(1)
  },
  stepIndicator: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2)
    }
  },
  text: {
    textAlign: "left",
    maxWidth: "520px"
  },
  title: {
    fontWeight: 500,
    color: "#262626", //theme.palette.gray[800]
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: theme.spacing(2)
    }
  },
  red: {
    fontWeight: 500,
    color: theme.palette.primary.main
  },
  content: {
    color: "#8C8C8C" //theme.palette.gray[300]
  },
  button: {
    marginTop: theme.spacing(2.5),
    padding: theme.spacing(0.5, 1.5),
    borderRadius: "10px",
    flexGrow: 1
  },
  solid: {
    color: "white",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark
    }
  },
  outlined: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  },
  buttonContainer: {
    display: "flex",
    columnGap: theme.spacing(2),
    flexWrap: "wrap",
    maxWidth: "520px"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "center"
    }
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  }
}))

interface StepCardProps {
  profileStatus: ProfileStatus
}

const StepCard: React.FC<StepCardProps> = ({ profileStatus }) => {
  const classes = useStyles()

  return (
    <Card className={`${classes.card} ${classes.flexRow}`}>
      <div className={classes.stepIndicator}>
        <Box className={classes.stepNo}>
          <Typography variant="h3">1</Typography>
        </Box>
        <Typography variant="h6" className={classes.title}>
          COMPLETE
        </Typography>
      </div>

      <div className={classes.flexCol}>
        <Typography variant="h4" className={`${classes.text} ${classes.title}`}>
          ลงทะเบียนเสร็จเรียบร้อย
        </Typography>
        <Typography variant="subtitle2" className={`${classes.text} ${classes.content}`}>
          พวกเราได้รับเอกสารการสมัครของคุณแล้ว ขอบคุณที่ให้ความสนใจในค่ายของเรา เราจะรีบดำเนินการตรวจเอกสารให้เร็วที่สุด!
        </Typography>
        <div className={classes.buttonContainer}>
          <Button variant="contained" disableElevation className={`${classes.button} ${classes.solid}`}>
            ตรวจสอบคิวสัมภาษณ์ทั้งหมด
          </Button>
          <Button variant="outlined" disableElevation className={`${classes.button} ${classes.outlined}`}>
            ตรวจสอบคิวสัมภาษณ์ทั้งหมด
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default StepCard

// const { application } = useApplicationStateContext()

//   const showFB = profileStatus === "failedInterview" || profileStatus === "passedFinal" || profileStatus === "failedFinal"

//   if (profileStatus !== "docNotOk" && profileStatus !== "passedInterview") {
//     return (
//       <Paper elevation={1} className={classes.paper}>
//         <Typography variant="h5" className={classes.title} dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].title }} />
//         {statusInfoConstant[profileStatus].contents.map((content, index) => (
//           <Typography key={index} variant="body1" className={classes.content} dangerouslySetInnerHTML={{ __html: content }} />
//         ))}
//         {showFB && (
//           <div className={classes.flex}>
//             <FacebookButtonComponent variant="contained" className={classes.button}>
//               LARNGEAR CAMP
//             </FacebookButtonComponent>
//           </div>
//         )}
//       </Paper>
//     )
//   }
//   if (profileStatus === "passedInterview") {
//     const code = application?.code!
//     const interviewInfo =
//       code[3] === "A" || code[3] === "C"
//         ? `จะจัดขึ้นในวันที่ <span class="${classes.bold}">31 ตุลาคม 2563</span> ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย แล้วเจอกันนะครับ :)`
//         : `จะอยู่ในช่วงวันที่ <span class="${classes.bold}">2-8 พฤศจิกายน 2563</span> โดยพี่ ๆ ค่ายลานเกียร์จะโทรสัมภาษณ์ทางเบอร์โทรศัพท์มือถือที่น้องได้กรอกไว้ ขอให้น้องคอยรอรับสายจากพี่ ๆ ด้วยนะครับ :)`
//     return (
//       <Paper elevation={1} className={classes.paper}>
//         <Typography variant="h5" className={classes.title} dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].title }} />
//         <Typography
//           variant="body1"
//           className={classes.content}
//           dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].contents[0] + interviewInfo }}
//         />
//       </Paper>
//     )
//   }
//   // profileStatus is "docNotOk"
//   const { picture, letterOfConsent, transcript } = application?.documentStateDetails
//   const failedDocuments = [
//     { id: 1, ...picture },
//     { id: 2, ...letterOfConsent },
//     { id: 3, ...transcript }
//   ].filter(detail => !detail.pass)
//   return (
//     <Paper elevation={1} className={classes.paper}>
//       <Typography variant="h5" className={classes.title} dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].title }} />
//       <Typography variant="body1" className={classes.content} dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].contents[0] }} />
//       {failedDocuments.map((detail, index) => (
//         <>
//           <Typography
//             key={index}
//             variant="body1"
//             className={`${classes.content} ${classes.marginLeft}`}
//             dangerouslySetInnerHTML={{ __html: `${index + 1}. ${statusInfoConstant[profileStatus].contents[detail.id]}` }}
//           />
//           <Typography
//             key={index}
//             variant="body2"
//             color="primary"
//             className={`${classes.content} ${classes.marginLeft}`}
//             dangerouslySetInnerHTML={{ __html: detail.message }}
//           />
//         </>
//       ))}
//       <Typography variant="body1" className={classes.content} dangerouslySetInnerHTML={{ __html: statusInfoConstant[profileStatus].contents[4] }} />
//       <Link className="no-underline" to="/application/step/5">
//         <Button variant="contained" className={classes.editButton} fullWidth>
//           <ChevronLeftIcon className={classes.icon} />
//           กลับไปแก้ไขเอกสาร
//         </Button>
//       </Link>
//     </Paper>
// )
