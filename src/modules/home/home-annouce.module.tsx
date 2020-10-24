import React from "react"
import { Box, BoxProps, Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import BackgroundOverlayComponent from "../../core/components/backgroundOverlay.component"
import { SafeArea } from "../../core/components/safeArea.component"
import { useAnnounceContext } from "../../core/providers/announce.provider"
import { grey } from "@material-ui/core/colors"

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
    fontWeight: 400,
    "&:disabled": {
      backgroundColor: grey[500],
      color: grey[200]
    }
  },
  textCenter: {
    textAlign: "center"
  }
}))
const HomeAnnouce: React.FC<BoxProps> = props => {
  const classes = useStyle()
  const { announceDate } = useAnnounceContext()
  const shouldAnnounce = new Date() > announceDate
  return (
    <BackgroundOverlayComponent
      src={require("../../assets/images/background/landing-3.svg")}
      aspectRatio={1617 / 654}
      offsetPercentage={7}
      minHeightPx={600}>
      <Box display="flex" height="100%" alignItems="center" justifyContent="center" className={classes.container + " " + props.className} {...props}>
        <SafeArea className={classes.textCenter}>
          <Typography className={classes.primaryAnnounce + " kanit"} variant="h6">
            สัมภาษณ์ 31&nbsp;ตุลาคม - 8&nbsp;พฤศจิกายน 2563
          </Typography>
          <Link to="/profile" className="no-underline" style={{ pointerEvents: shouldAnnounce ? "initial" : "none" }}>
            <Button variant="contained" color="secondary" className={classes.subscribeButton} disabled={!shouldAnnounce}>
              {shouldAnnounce ? "ประกาศผลผู้มีสิทธิ์สัมภาษณ์" : "หมดเขตรับสมัคร"}
            </Button>
          </Link>
        </SafeArea>
      </Box>
    </BackgroundOverlayComponent>
  )
}

export default HomeAnnouce
