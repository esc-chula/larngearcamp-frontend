import React from "react"
import { Box, BoxProps, Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import BackgroundOverlayComponent from "../../core/components/backgroundOverlay.component"
import { SafeArea } from "../../core/components/safeArea.component"

const useStyle = makeStyles(theme => ({
  container: {
    position: "relative",
    maxWidth: "100vw",
    top: "20%",
    height: "80%"
  },
  primaryAnnounce: {
    color: theme.palette.primary.main,
    padding: theme.spacing(0, 6),
    fontSize: "2.5rem",
    margin: theme.spacing(0, 0, 2, 0)
  },
  subscribeButton: {
    padding: theme.spacing(1, 6),
    fontSize: "1.2rem",
    fontWeight: 400
  },
  textCenter: {
    textAlign: "center"
  }
}))
const HomeAnnouce: React.FC<BoxProps> = props => {
  const classes = useStyle()
  const closed = new Date() >= new Date("2020-10-21T00:00:00+07:00")
  let button = <Button variant="contained" color="secondary" className={classes.subscribeButton}>
              {closed ? "ปิดสมัครแล้ว" : "สมัครค่ายลานเกียร์"}
            </Button>
  if(!closed){
    button = <Link to="/application" className="no-underline">
            {button}
          </Link>
  }
  return (
    <BackgroundOverlayComponent
      src={require("../../assets/images/background/landing-3.svg")}
      aspectRatio={1617 / 654}
      offsetPercentage={7}
      minHeightPx={600}>
      <Box display="flex" height="100%" alignItems="center" justifyContent="center" className={classes.container + " " + props.className} {...props}>
        <SafeArea className={classes.textCenter}>
          <Typography className={classes.primaryAnnounce + " kanit"} variant="h6">
            รับสมัคร 25&nbsp;กันยายน - 20&nbsp;ตุลาคม 2563
          </Typography>
          {button}
        </SafeArea>
      </Box>
    </BackgroundOverlayComponent>
  )
}

export default HomeAnnouce
