import React from "react"
import { Box, BoxProps, Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import { Link } from "react-router-dom"
import BackgroundOverlayComponent from "../../core/components/backgroundOverlay.component"

import landing3 from "../../assets/images/background/landing-3.svg"

const useStyle = makeStyles(theme => ({
  container: {
    position: "relative",
    maxWidth: "100vw",
    top: "20%",
    height: "80%"
  },
  primaryAnnounce: {
    color: theme.palette.primary.main,
    fontSize: pxToRem(52),
    lineHeight: pxToRem(78),
    margin: "0 0 32px 0",
    fontWeight: 500
  },
  subscribeButton: {
    width: "min(370px, 80%)",
    height: "60px"
  },
  subscribeButtonText: {
    fontSize: pxToRem(28),
    fontWeight: 500,
    lineHeight: pxToRem(42)
  },
  textCenter: {
    textAlign: "center"
  }
}))
const HomeAnnouce: React.FC<BoxProps> = props => {
  const classes = useStyle()
  return (
    <BackgroundOverlayComponent src={landing3} aspectRatio={1617 / 654} offsetPercentage={7} minHeightPx={600}>
      <Box display="flex" height="100%" alignItems="center" justifyContent="center" className={classes.container + " " + props.className} {...props}>
        <div className={classes.textCenter}>
          <Typography className={classes.primaryAnnounce + " kanit"}>รับสมัคร 25&nbsp;กันยายน - 10&nbsp;ตุลาคม 2563</Typography>
          <Link to="/application" className="no-underline">
            <Button variant="contained" color="secondary" className={classes.subscribeButton}>
              <Typography variant="subtitle1" className={classes.subscribeButtonText + " kanit"}>
                สมัครค่ายลานเกียร์
              </Typography>
            </Button>
          </Link>
        </div>
      </Box>
    </BackgroundOverlayComponent>
  )
}

export default HomeAnnouce
