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
  dotCurrent: {
    backgroundColor: "transparent",
    border: `solid 4px ${theme.palette.primary.main}`
  },
  timelineConnector: {
    width: "4px",
    height: "90px",
    backgroundColor: theme.palette.primary.main
  },
  timelineOppositeContent: {
    display: "none"
  },
  inactive: {
    backgroundColor: "#BFBFBF"
  }
}))

export interface TimelineProps extends BoxProps {
  label: TimelineModel[]
  startNumber?: number
  includeFinalLine?: boolean
}

export const TimelineDisplay: React.FC<TimelineProps> = props => {
  const { label } = props

  const classes = useStyle()

  return (
    <Timeline className={classes.timeline}>
      {label.map(({ duration, title }, index) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.timelineOppositeContent} />
            <TimelineSeparator className={classes.timelineSeparator}>
              <TimelineDot className={`${classes.timelineDot}`} />
              {index < label.length - 1 && <TimelineConnector className={`${classes.timelineConnector}`} />}
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              <Typography className={classes.eventTitle}>{title}</Typography>
              <Typography className={classes.durationTitle}>{duration}</Typography>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
