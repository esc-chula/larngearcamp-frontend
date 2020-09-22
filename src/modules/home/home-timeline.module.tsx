import React from "react"
import { Box, BoxProps, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TimelineDisplay, TimelineProps } from "../../core/components/timeline.component"

const useStyle = makeStyles(theme => ({
  title: {
    marginBottom: "50px"
  },
  endCard: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "max-content",
    margin: "auto",
    padding: "24px 36px 24px 36px",
    textAlign: "center"
  }
}))

const HomeTimeline: React.FC<TimelineProps & BoxProps> = props => {
  const classes = useStyle()
  return (
    <Box {...props}>
      <Typography variant="h2" align="center" className={classes.title}>
        TIMELINE
      </Typography>
      <TimelineDisplay includeFinalLine={true} label={props.label} />
      <div className={classes.endCard}>
        <Typography variant="h6" className="kanit">
          ค่ายลานเกียร์ครั้งที่ 20
        </Typography>
        <Typography variant="subtitle1" className="kanit">
          8 - 11 มกราคม 2564
        </Typography>
      </div>
    </Box>
  )
}

export default HomeTimeline
