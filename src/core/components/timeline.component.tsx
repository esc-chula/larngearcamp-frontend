import React from "react"
import { BoxProps, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TimelineModel } from "../constants/timeline.constant"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from "@material-ui/lab"
import { format, isWithinInterval, isFuture, isEqual, addYears } from "date-fns"
import { th } from "date-fns/esm/locale"
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
    top: "-5px",
    textAlign: "left",
    paddingTop: "0"
  },
  eventTitle: {
    fontSize: "30px",
    width: "500px",
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

  const currentDate = new Date()

  const toChristianCalendar = (date: Date): Date => {
    return addYears(date, -543)
  }

  const isInactive = (endDate: Date): CSSProperties | string => {
    if (isFuture(toChristianCalendar(endDate))) return classes.inactive
    return ""
  }

  const getDotStatus = (startDate: Date, endDate: Date): CSSProperties | string => {
    if (isWithinInterval(currentDate, { start: toChristianCalendar(startDate), end: toChristianCalendar(endDate) })) return classes.dotCurrentDate
    return isInactive(endDate)
  }

  const formatDateTime = (date: Date): string => {
    return format(date, "d MMMM yyyy", { locale: th })
  }

  return (
    <Timeline className={classes.timeline}>
      {label.map(({ duration, title }, index) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.timelineOppositeContent} />
            <TimelineSeparator className={classes.timelineSeparator}>
              <TimelineDot className={`${classes.timelineDot} ${getDotStatus(duration.start, duration.end)}`} />
              {index < label.length - 1 && (
                <TimelineConnector className={`${classes.timelineConnector} ${isInactive(label[index + 1].duration.start)}`} />
              )}
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              <Typography className={classes.eventTitle}>{title}</Typography>
              <Typography className={classes.durationTitle}>
                {isEqual(duration.start, duration.end)
                  ? formatDateTime(duration.start)
                  : `${formatDateTime(duration.start)} - ${formatDateTime(duration.end)}`}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
