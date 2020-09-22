import React from "react"
import { Typography, Button, Box, BoxProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"

const useStyle = makeStyles(theme => ({
  title: {
    fontSize: pxToRem(64),
    lineHeight: pxToRem(75),
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
    <Box textAlign="center" {...props}>
      <h2 className={classes.title}>LARNGEAR CAMP 20th</h2>
      <Typography variant="subtitle1" className={classes.subtitle}>
        ค้นหาความเป็นวิศวกร ด้วยมือของคุณเอง
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        <p className={classes.buttonText}>Apply Now</p>
      </Button>
    </Box>
  )
}

export default HomeTitle
