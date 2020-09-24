import React from "react"
import { Box, BoxProps, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
  container: {
    display: "inline-grid",
    gridTemplateColumns: "1fr min-content 1fr",
    margin: "auto"
  },
  middleContainer: {
    display: "inline-grid",
    gridTemplateColumns: "min-content",
    gridTemplateRows: "max-content 1fr",
    marginLeft: "min(3.7vw, 37px)",
    marginRight: "min(3.2vw, 32px)",
    justifyItems: "center"
  },
  numberCircle: {
    backgroundColor: theme.palette.primary.main,
    width: "32px",
    height: "32px",
    borderRadius: "50%"
  },
  numberText: {
    lineHeight: "32px",
    width: "32px",
    color: "white",
    textAlign: "center"
  },
  hline: {
    margin: "8px 0 8px 0",
    width: "0px",
    paddingLeft: "1px",
    paddingRight: "1px",
    height: "48px",
    backgroundColor: "#BDBDBD"
  },
  leftText: {
    textAlign: "right",
    color: "#828282",
    lineHeight: "32px",
    fontSize: `min(4.425vw, ${theme.typography.body2.fontSize})`,
    fontWeight: "normal"
  },
  rightText: {
    textAlign: "left",
    lineHeight: "32px",
    fontSize: `min(5.9vw, ${theme.typography.h6.fontSize})`
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

  const classes = useStyle()

  return (
    <Box className={classes.container + " " + rest.className} {...rest}>
      {label.map(({ left, right }, i, arr) => (
        <React.Fragment key={i}>
          <Typography variant="body2" className={classes.leftText}>
            {left}
          </Typography>

          <div className={classes.middleContainer}>
            <div className={classes.numberCircle}>
              <Typography variant="body2" className={classes.numberText}>
                {(startNumber ?? 1) + i}
              </Typography>
            </div>
            {(includeFinalLine || i < arr.length - 1) && (
              <Box>
                <div className={classes.hline} />
              </Box>
            )}
          </div>

          <Typography variant="h6" className={classes.rightText}>
            {right}
          </Typography>
        </React.Fragment>
      ))}
      {/*
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
      */}
    </Box>
  )
}
