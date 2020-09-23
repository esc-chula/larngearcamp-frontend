import React from "react"
import { Typography, Button, Box, BoxProps, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import { Link } from "react-router-dom"

import landing1 from "../../assets/images/background/landing-1.svg"
import BackgroundOverlay from "../../core/components/backgroundOverlay.component"

const useStyle = makeStyles(theme => ({
  title: {
    fontSize: pxToRem(64),
    lineHeight: pxToRem(75),
    fontWeight: 300,
    margin: "0 0 20px 0"
  },
  subtitle: {
    fontWeight: 200,
    lineHeight: pxToRem(42),
    margin: " 0 0 28px 0"
  },
  button: {
    width: "200px",
    height: "50px"
  },
  buttonText: {
    fontWeight: 600,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(23)
  }
}))

const HomeTitle: React.FC<BoxProps> = props => {
  const classes = useStyle()
  return (
    <BackgroundOverlay src={landing1} aspectRatio={1519 / 832} contentPercentage={70} minHeightPx={800}>
      <Box textAlign="center" {...props}>
        <h2 className={classes.title}>LARNGEAR CAMP 20th</h2>
        <Typography variant="subtitle1" className={classes.subtitle}>
          ค้นหาความเป็นวิศวกร
          <Hidden smUp>
            <br />
          </Hidden>{" "}
          ด้วยมือของคุณเอง
        </Typography>
        <Link to="/application" className="no-underline">
          <Button variant="contained" color="primary" className={classes.button}>
            <Typography variant="button" className={classes.buttonText}>
              Apply Now
            </Typography>
          </Button>
        </Link>
      </Box>
    </BackgroundOverlay>
  )
}

export default HomeTitle
