import React from "react"
import { Typography, Button, Box, BoxProps, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import { Link } from "react-router-dom"

import landing1 from "../../assets/images/background/landing-1.svg"
import BackgroundOverlay from "../../core/components/backgroundOverlay.component"

const useStyle = makeStyles(theme => ({
  title: {
    fontSize: pxToRem(60),
    lineHeight: pxToRem(75),
    fontFamily: "Raleway",
    fontWeight: 300,
    margin: "0 0 20px 0"
  },
  titleBig: {
    fontSize: pxToRem(64)
  },
  titleSmall: {
    fontSize: pxToRem(48)
  },
  subtitle: {
    fontSize: pxToRem(28),
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
      <Box display="flex" justifyContent="center" alignItems="center" height="80%">
        <Box textAlign="center" height="min-content" {...props}>
          <h2 className={classes.title}>
            <span className={classes.titleBig}>L</span>
            <span className={classes.titleSmall}>ARNGEAR CAMP</span> <span>20th</span>
          </h2>
          <Typography variant="subtitle1" className={classes.subtitle}>
            ค้นหาความเป็นวิศวกร
            <Hidden smUp>
              <br />
            </Hidden>{" "}
            ด้วยมือของคุณเอง
          </Typography>
          <Link to="/application" className="no-underline">
            <Button variant="contained" color="primary" className={classes.button}>
              <Typography className={classes.buttonText}>Apply Now</Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </BackgroundOverlay>
  )
}

export default HomeTitle
