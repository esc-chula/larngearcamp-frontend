import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TimelineDisplay, TimelineProps } from "../../core/components/timeline.component"
import { SafeArea } from "../../core/components/safeArea.component"
import { ITheme } from "../../styles/types"
import { ReactComponent as GearIcon } from "../../assets/images/icon/gear-icon.svg"

const useStyle = makeStyles((theme: ITheme) => ({
  root: {
    backgroundColor: "white",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    color: theme.palette.gray[700],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5)
    }
  },
  title: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginBottom: theme.spacing(3)
    }
  },
  gear: {
    width: "403px",
    height: "403px",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  leftGear: { left: 0, transform: "translate(-50%, 0)" },
  rightGear: { right: 0, top: "50%", transform: "translate(50%, 0)" }
}))

const HomeTimeline: React.FC<TimelineProps & React.HTMLAttributes<HTMLDivElement>> = props => {
  const classes = useStyle()
  return (
    <SafeArea {...props} className={`${classes.root} ${props.className}`}>
      <GearIcon className={`${classes.gear} ${classes.leftGear}`} />
      <GearIcon className={`${classes.gear} ${classes.rightGear}`} />
      <Typography variant="h2" align="center" className={classes.title}>
        กำหนดการ
      </Typography>
      <TimelineDisplay label={props.label} />
    </SafeArea>
  )
}

export default HomeTimeline
