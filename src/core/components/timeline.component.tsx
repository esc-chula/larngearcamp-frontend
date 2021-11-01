import React from "react"
import { BoxProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TimelineModel } from "../constants/timeline.constant"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@material-ui/lab"

const useStyle = makeStyles(theme => ({
  timelineContent: {
    textAlign: "left",
    paddingTop: "0"
  },
  timelineDot: {
    margin: "0",
    width: "32px",
    aspectRatio: "1",
    padding: "0",
    backgroundColor: theme.palette.primary.main
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
    <Timeline>
      {label.map(({ duration, title }, index) => {
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot} />
              {index < label.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>{title}</TimelineContent>
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
