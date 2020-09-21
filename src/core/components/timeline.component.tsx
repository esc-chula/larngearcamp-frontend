import React from "react"
import { Box, BoxProps, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const UseStyleTL = makeStyles(theme => ({
  title: {
    marginBottom: "60px"
  },
  line: {
    height: "32px"
  },
  numberCircle: {
    backgroundColor: theme.palette.primary.main,
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    position: "absolute",
    left: "calc(50% - 16px)"
  },
  numberText: {
    position: "absolute",
    lineHeight: "32px",
    width: "32px",
    left: "calc(50% - 16px)",
    color: "white",
    textAlign: "center"
  },
  NCLeftText: {
    color: "#828282",
    position: "absolute",
    lineHeight: "32px",
    right: "calc(50% + 16px + 32px)",
    fontWeight: "normal"
  },
  NCRightText: {
    position: "absolute",
    lineHeight: "32px",
    left: "calc(50% + 16px + 32px)"
  },
  hline: {
    margin: "5px auto 5px auto",
    width: "3px",
    height: "calc(48px - 10px)",
    backgroundColor: "#BDBDBD"
  }
}))

export interface TimelineLabel {
  left: string
  right: string
}

export interface TimelineProps extends BoxProps {
  label: TimelineLabel[]
  startNumber?: number
  includeFinalLine?: boolean
}

export const TimelineDisplay: React.FC<TimelineProps> = props => {
  const { label, startNumber, includeFinalLine, ...rest } = props

  const classes = UseStyleTL()

  return (
    <Box {...rest}>
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
  )
}
