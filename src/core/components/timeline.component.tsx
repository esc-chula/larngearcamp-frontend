import React from "react"
import { BoxProps, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TimelineModel } from "../constants/timeline.constant"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from "@material-ui/lab"
import moment, { Moment } from "moment"
import "moment/locale/th"
import { CSSProperties } from "@material-ui/styles"

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
  dotCurrentDate: {
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

  const currentDate = moment()

  const isInactive = (endDate: Moment): CSSProperties | string => {
    if (currentDate.isBefore(endDate)) return classes.inactive
    return ""
  }

  const getDotStatus = (startDate: Moment, endDate: Moment): CSSProperties | string => {
    if (currentDate.isBetween(startDate, endDate, undefined, "[]")) return classes.dotCurrentDate
    return isInactive(endDate)
  }

  const toMoment = (date: string): Moment => {
    return moment(date, "DD MMMM YYYY").subtract(543, "year")
  }

  return (
    <Timeline className={classes.timeline}>
      {label.map(({ duration, title }, index) => {
        const startDate = toMoment(duration.start)
        const endDate = toMoment(duration.end)

        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.timelineOppositeContent} />
            <TimelineSeparator className={classes.timelineSeparator}>
              <TimelineDot className={`${classes.timelineDot} ${getDotStatus(startDate, endDate)}`} />
              {index < label.length - 1 && (
                <TimelineConnector className={`${classes.timelineConnector} ${isInactive(toMoment(label[index + 1].duration.start))}`} />
              )}
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              <Typography className={classes.eventTitle}>{title}</Typography>
              <Typography className={classes.durationTitle}>
                {startDate.isSame(endDate) ? duration.start : `${duration.start} - ${duration.end}`}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
