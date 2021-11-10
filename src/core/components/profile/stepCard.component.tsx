import { Button, makeStyles, Card, Typography, Box } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import stepCardConstant from "../../constants/stepCard.constant"

import { useApplicationStateContext } from "../../providers/applicationState.provider"

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

  const text = stepCardConstant[step][status][isApproved]!

  const renderButton = (opensDialog: boolean, isPrimary: boolean) => {
    if (opensDialog)
      return (
        // TODO : Handle Dialog - how to show different ones?
        <Button
          variant={`${isPrimary ? "contained" : "outlined"}`}
          disableElevation
          className={`${classes.button} ${isPrimary ? classes.solid : classes.outlined}`}>
          {isPrimary ? text.primaryButton!.label : text.secondaryButton!.label}
        </Button>
      )
    else
      return (
        <Link to={`${isPrimary ? text.primaryButton!.path : text.secondaryButton!.path}`} className={`no-underline ${classes.linkButton}`}>
          <Button
            variant={`${isPrimary ? "contained" : "outlined"}`}
            disableElevation
            className={`${classes.button} ${isPrimary ? classes.solid : classes.outlined}`}>
            {isPrimary ? text.primaryButton!.label : text.secondaryButton!.label}
          </Button>
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
        <Typography variant="subtitle2" className={`${classes.text} ${classes.content}`}>
          {text.contents}
        </Typography>
        {status === "inProgress" && (
          <div className={classes.buttonContainer}>
            {text.primaryButton && renderButton(text.primaryButton.opensDialog, true)}
            {text.secondaryButton && renderButton(text.secondaryButton.opensDialog, false)}
          </div>
        )}
      </div>
    </Card>
  )
}

export default StepCard
