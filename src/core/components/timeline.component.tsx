import React from "react"
import { BoxProps, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TimelineModel } from "../constants/timeline.constant"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from "@material-ui/lab"

const useStyle = makeStyles(theme => ({
  timeline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  timelineContent: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: "-10px",
    textAlign: "left",
    paddingTop: "0"
  },
  eventTitle: {
    fontSize: "30px",
    width: "450px",
    fontWeight: 500,
    color: theme.palette.secondary.dark
  },
  durationTitle: {
    ...theme.typography.subtitle1,
    fontWeight: 300,
    color: theme.palette.secondary.light
  },
  timelineSeparator: {
    marginRight: "60px"
  },
  timelineDot: {
    margin: "0",
    width: "32px",
    aspectRatio: "1",
    padding: "0",
    backgroundColor: theme.palette.primary.main
  },
  timelineConnector: {
    width: "4px",
    height: "90px",
    backgroundColor: theme.palette.primary.main
  },
  timelineOppositeContent: {
    display: "none"
  }
}))

export interface TimelineProps extends BoxProps {
  label: TimelineModel[]
  startNumber?: number
  includeFinalLine?: boolean
}

export const TimelineDisplay: React.FC<TimelineProps> = props => {
  const { label, startNumber, includeFinalLine, ...rest } = props

  const classes = useStyle()

  return (
    <Timeline className={classes.timeline}>
      {label.map(({ duration, title }, index) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.timelineOppositeContent} />
            <TimelineSeparator className={classes.timelineSeparator}>
              <TimelineDot className={classes.timelineDot} />
              {index < label.length - 1 && <TimelineConnector className={classes.timelineConnector} />}
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              <Typography className={classes.eventTitle}>{title}</Typography>
              <Typography className={classes.durationTitle}>{duration}</Typography>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
    /*
    <Box className={`${classes.container} ${rest.className}`} {...rest}>
      {label.map(({ title, duration }, i, arr) => (
        <React.Fragment key={i}>
          <div className={classes.middleContainer}>
            <div className={classes.numberCircle} />
            {(includeFinalLine || i < arr.length - 1) && (
              <Box>
                <div className={classes.hline} />
              </Box>
            )}
          </div>
          <React.Fragment>
            <Typography variant="h6" className={classes.rightText}>
              {title}
            </Typography>
            <Typography variant="body2">{duration}</Typography>
          </React.Fragment>
        </React.Fragment>
      ))}
      {props.label.map(({ left, right }, i, arr) => (
        <div key={i}>
          <div className={classes.line}>
            <Typography variant="body2" className={classes.NCLeftText + " kanit"}>
              {left}
            </Typography>
            <div className={classes.numberCircle}></div>
            <Typography variant="body2" className={classes.numberText + " kanit"}>
              {(props.startNumber || 1) + i}
            </Typography>
            <Typography variant="h6" className={classes.NCRightText}>
              {right}
            </Typography>
          </div>

          {(props.includeFinalLine || i < arr.length - 1) && <div className={classes.hline} />}
        </div>
      ))}
    </Box>
      */
  )
}
