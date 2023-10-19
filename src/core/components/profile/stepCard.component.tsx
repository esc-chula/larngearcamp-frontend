import { Button, makeStyles, Card, Typography, Box } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import stepCardConstant from "../../constants/stepCard.constant"
import { useDialogContext } from "../../providers/dialog.provider"
import { useApplicationStateContext } from "../../providers/applicationState.provider"
import { dateToLocaleString, resolveRegistraionTime } from "../../../utils/conversion"
import { useAuthContext } from "../../providers/auth.provider"
import MyProfileModel from "../../models/myprofile.models"
import copyToClipBoard from "../../../assets/images/icon/copy-to-clipboard.svg"

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4),
    boxShadow: "0px 100px 257px rgba(0, 0, 0, 0.07), 0px 18.576px 34.4894px rgba(0, 0, 0, 0.0269069)",
    borderRadius: "10px",
    margin: theme.spacing(2.25)
  },
  stepNo: {
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 56,
    height: 56,
    margin: theme.spacing(1)
  },
  icon: {
    height: 16
  },
  redCircle: {
    background: theme.palette.primary.main,
    color: "#FFFFFF" //theme.palette.gray[0]
  },
  outlinedRedCircle: {
    border: `3px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main //theme.palette.gray[0]
  },
  outlinedGrayCircle: {
    border: "3px solid #BFBFBF", //theme.palette.gray[200]
    color: "#BFBFBF" //theme.palette.gray[200]
  },
  stepIndicator: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "150px",
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
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: theme.spacing(2)
    }
  },
  blackText: {
    color: "#262626" //theme.palette.gray[800]
  },
  redText: {
    color: theme.palette.primary.main
  },
  grayText: {
    color: "#BFBFBF" //theme.palette.gray[200]
  },
  boldText: {
    fontWeight: 500
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
  linkButton: {
    display: "flex",
    flexGrow: 1,
    "&::after": {
      content: "none"
    }
  },
  paragraphTop: {
    marginBottom: theme.spacing(1.5)
  },
  link: {
    color: theme.palette.primary.main,
    "&::after": {
      content: "none"
    }
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
    maxWidth: "520px",
    flexGrow: 1
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

export interface StepCardProps {
  step: 1 | 2 | 3 | 4 | 5 | 6
  status: "complete" | "inProgress" | "incomplete"
  isApproved: "true" | "false"
}

interface InterviewStepCardProps {
  status: "complete" | "inProgress" | "incomplete"
  interviewType: string
  interviewTime: string | undefined
}

const StepCard: React.FC<StepCardProps> = ({ step, status, isApproved }) => {
  const classes = useStyles()
  const { openPaymentDialog, openShirtSizeDialog } = useDialogContext()
  const { me } = useAuthContext()
  const { application } = useApplicationStateContext()
  const { documentState } = me.data as MyProfileModel

  const text = stepCardConstant[step][status][isApproved]!
  const zoomName = application.lgNumber.trim().substring(3) + "_" + application.firstName.trim()

  const setStepIndicatorStyles = (status: String) => {
    switch (status) {
      case "complete":
        return [classes.redCircle, classes.blackText]
      case "inProgress":
        return [classes.outlinedRedCircle, classes.redText]
      case "incomplete":
        return [classes.outlinedGrayCircle, classes.grayText]
      default:
        return []
    }
  }

  const resolveButton = (isPrimary: boolean, onClick?: () => void) => {
    return (
      <Button
        variant={`${isPrimary ? "contained" : "outlined"}`}
        disableElevation
        className={`${classes.button} ${isPrimary ? classes.solid : classes.outlined}`}
        onClick={onClick}>
        {isPrimary ? text.primaryButton!.label : text.secondaryButton!.label}
      </Button>
    )
  }

  const copyZoomNameToClipboard = async () => {
    if ("clipboard" in navigator) return await navigator.clipboard.writeText(zoomName)
  }

  const CopyToClipboardIcon: React.FC<React.HTMLAttributes<HTMLImageElement>> = props => {
    return <img src={copyToClipBoard} onClick={copyZoomNameToClipboard} alt="" {...props} />
  }

  const renderButton = (opensDialog: boolean, dialogType: string | undefined, isPrimary: boolean, isExternalPath: boolean | undefined) => {
    if (opensDialog) {
      if (dialogType === "payment") return resolveButton(isPrimary, openPaymentDialog)
      if (dialogType === "shirtSize") return resolveButton(isPrimary, openShirtSizeDialog)
    }
    if (isExternalPath)
      return (
        <a
          href={`${isPrimary ? text.primaryButton!.path : text.secondaryButton!.path}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`no-underline ${classes.linkButton}`}>
          {resolveButton(isPrimary)}
        </a>
      )
    else
      return (
        <Link to={`${isPrimary ? text.primaryButton!.path : text.secondaryButton!.path}`} className={`no-underline ${classes.linkButton}`}>
          {resolveButton(isPrimary)}
        </Link>
      )
  }

  const InterviewStepCard: React.FC<InterviewStepCardProps> = ({ status, interviewType, interviewTime }) => {
    if (status === "inProgress") {
      if (!interviewTime) {
        return (
          <>
            <Typography variant="subtitle2" className={`${classes.text} ${classes.content}`}>
              <>
                ขอแสดงความยินดี !! น้องเป็นหนึ่งในผู้มีสิทธิ์สัมภาษณ์ เตรียมตัวได้พบปะพูดคุยกับพี่ ๆ ผู้สัมภาษณ์สุดน่ารักและใจดีในวันที่ 21 ตุลาคม
                2566 ณ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย สำหรับน้อง ๆ กรุงเทพฯ และปริมณฑล หรือ สัมภาษณ์ผ่านทางซูมสำหรับน้อง ๆ ต่างจังหวัด ได้เลย
                !!
              </>
            </Typography>
            <div className={classes.buttonContainer}>
              {text.secondaryButton &&
                renderButton(text.secondaryButton.opensDialog, text.secondaryButton.dialogType, false, text.secondaryButton.isExternalPath)}
            </div>
          </>
        )
      } else {
        return (
          <>
            {interviewType === "online" && (
              <>
                <Typography variant="subtitle2" className={`${classes.text} ${classes.content} ${classes.paragraphTop}`}>
                  รอบสัมภาษณ์ของน้องจะเป็น <span className={`${classes.redText} ${classes.boldText}`}>{dateToLocaleString(interviewTime)}</span>
                </Typography>
                <Typography variant="subtitle2" className={`${classes.text} ${classes.content}`}>
                  {text.contents}
                  รบกวนน้องตั้งชื่อใน ZOOM ว่า "{zoomName}" นะครับ <CopyToClipboardIcon className={classes.icon} />
                </Typography>

                <div className={classes.buttonContainer}>
                  {text.primaryButton &&
                    renderButton(text.primaryButton.opensDialog, text.primaryButton.dialogType, true, text.primaryButton.isExternalPath)}
                  {text.secondaryButton &&
                    renderButton(text.secondaryButton.opensDialog, text.secondaryButton.dialogType, false, text.secondaryButton.isExternalPath)}
                </div>
              </>
            )}
            {interviewType === "onsite" && (
              <>
                <Typography variant="subtitle2" className={`${classes.text} ${classes.content} ${classes.paragraphTop}`}>
                  รอบสัมภาษณ์ของน้องจะเป็น <span className={`${classes.redText} ${classes.boldText}`}>{dateToLocaleString(interviewTime)}</span>
                </Typography>
                <Typography variant="subtitle2" className={`${classes.text} ${classes.content} ${classes.paragraphTop}`}>
                  การสัมภาษณ์จะเป็นในรูปแบบออนไซต์ ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย โดยจะเปิดให้ลงทะเบียนตั้งแต่เวลา{" "}
                  {resolveRegistraionTime(interviewTime)}
                </Typography>
                <Typography variant="subtitle2" className={`${classes.text} ${classes.content} ${classes.paragraphTop}`}>
                  น้อง ๆ สามารถติดตามรายละเอียดการสัมภาษณ์ได้ที่เพจเฟซบุ๊ก LarnGear Camp
                </Typography>
                <a
                  href="https://www.facebook.com/LARNGEARCAMP/posts/pfbid02MyjEW87kj9Jo6GS3nP8cDLnR2yVEWnmxQ2qRWJVdeg6CkBE9AoG1cRUrjrVTy8uKl"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#941014" }}>
                  Checklist สำหรับการเตรียมตัวสัมภาษณ์
                </a>
                <a
                  href="https://www.facebook.com/LARNGEARCAMP/posts/pfbid02y318zdQrx7oSCxni9ZfKUGdBFjBpAsfnXEqNhCSW4p2ZUboi8yUdaUyZi8gDLoD1l"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#941014" }}>
                  แผนที่การเดินทางไปคณะวิศวกรรมศาสตร์
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdKhVP_C7tZ1-xDzVEQu6mloZPcveaLgBvkzx52JBfo4wuKPw/viewform"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#941014" }}>
                  แบบฟอร์มยินยอมให้เก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล
                </a>
                <div className={classes.buttonContainer}>
                  {text.secondaryButton &&
                    renderButton(text.secondaryButton.opensDialog, text.secondaryButton.dialogType, false, text.secondaryButton.isExternalPath)}
                </div>
              </>
            )}
          </>
        )
      }
    }
    return (
      <>
        <Typography variant="subtitle2" className={`${classes.text} ${classes.content}`}>
          {text.contents}
        </Typography>
      </>
    )
  }

  const checkInterviewType = (interviewAvailability: string): string => {
    if (interviewAvailability === "AVAILABLE" || interviewAvailability === "NOT_SURE") return "onsite"
    return "online"
  }

  return (
    <Card className={`${classes.card} ${classes.flexRow}`}>
      <div className={classes.stepIndicator}>
        <Box className={`${classes.stepNo} ${setStepIndicatorStyles(status)[0]}`}>
          <Typography variant="h3">{step}</Typography>
        </Box>
        <Typography variant="subtitle1" className={`${classes.title} ${setStepIndicatorStyles(status)[1]}`}>
          {status === "inProgress" ? "in progress" : status}
        </Typography>
      </div>

      <div className={classes.flexCol}>
        <Typography variant="h4" className={`${classes.text} ${classes.title} ${classes.blackText}`}>
          {text.title}
        </Typography>
        {step === 5 && documentState.payment === "PASSED" && (
          <Typography variant="subtitle2" className={`${classes.text} ${classes.boldText} ${classes.redText} ${classes.paragraphTop}`}>
            หลักฐานการชำระเงินได้รับการอนุมัติแล้ว
          </Typography>
        )}
        {step === 5 && documentState.payment === "CHANGE_REQUIRED" && (
          <>
            <Typography variant="subtitle2" className={`${classes.text} ${classes.boldText} ${classes.redText} ${classes.paragraphTop}`}>
              หลักฐานการชำระเงินไม่ถูกต้อง
            </Typography>
            <Typography variant="subtitle2" className={`${classes.text} ${classes.boldText} ${classes.redText} ${classes.paragraphTop}`}>
              จากทีมงาน : {application.payment.comment !== "" ? application.payment.comment : "โปรดอัพโหลดอีกครั้ง"}
            </Typography>
          </>
        )}
        {step === 4 && (
          <InterviewStepCard
            status={status}
            interviewType={checkInterviewType(application.interviewAvailability)}
            interviewTime={application.interviewTime}
          />
        )}
        {step !== 4 && (
          <>
            <Typography variant="subtitle2" className={`${classes.text} ${classes.content}`}>
              {text.contents}
            </Typography>
            <div className={classes.buttonContainer}>
              {text.primaryButton &&
                renderButton(text.primaryButton.opensDialog, text.primaryButton.dialogType, true, text.primaryButton.isExternalPath)}
              {text.secondaryButton &&
                renderButton(text.secondaryButton.opensDialog, text.secondaryButton.dialogType, false, text.secondaryButton.isExternalPath)}
            </div>
          </>
        )}
      </div>
    </Card>
  )
}

export default StepCard
