import { Button, makeStyles, Card, Typography, Box } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import stepCardConstant from "../../constants/stepCard.constant"
import { useDialogContext } from "../../providers/dialog.provider"
import { useApplicationStateContext } from "../../providers/applicationState.provider"
import { dateToLocaleString } from "../../../utils/conversion"
import { useAuthContext } from "../../providers/auth.provider"
import MyProfileModel from "../../models/myprofile.models"

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

const StepCard: React.FC<StepCardProps> = ({ step, status, isApproved }) => {
  const classes = useStyles()
  const { openPaymentDialog, openShirtSizeDialog } = useDialogContext()
  const { me } = useAuthContext()
  const { application } = useApplicationStateContext()

  const { documentState } = me.data as MyProfileModel

  const text = stepCardConstant[step][status][isApproved]!

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

        {step === 4 && status === "inProgress" && application.interviewTime && (
          <Typography variant="subtitle2" className={`${classes.text} ${classes.content} ${classes.paragraphTop}`}>
            ???????????????????????????????????????????????????????????????????????? <span className={`${classes.redText} ${classes.boldText}`}>{dateToLocaleString(application.interviewTime)}</span>
          </Typography>
        )}
        {step === 5 && documentState.payment === "PASSED" && (
          <Typography variant="subtitle2" className={`${classes.text} ${classes.boldText} ${classes.redText} ${classes.paragraphTop}`}>
            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Typography>
        )}

        <Typography variant="subtitle2" className={`${classes.text} ${classes.content}`}>
          {text.contents}
        </Typography>

        {text.primaryButton && (
          <div className={classes.buttonContainer}>
            {text.primaryButton &&
              renderButton(text.primaryButton.opensDialog, text.primaryButton.dialogType, true, text.primaryButton.isExternalPath)}
            {text.secondaryButton &&
              renderButton(text.secondaryButton.opensDialog, text.secondaryButton.dialogType, false, text.secondaryButton.isExternalPath)}
          </div>
        )}
      </div>
    </Card>
  )
}

export default StepCard
