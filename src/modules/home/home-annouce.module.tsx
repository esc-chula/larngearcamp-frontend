import React from "react"
import { Box, BoxProps, Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import { Link } from "react-router-dom"

const useStyle = makeStyles(theme => ({
  container: {
    maxWidth: "100vw"
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
  }
}))
const HomeAnnouce: React.FC<BoxProps> = props => {
  const classes = useStyle()
  return (
    <Box textAlign="center" className={classes.container + " " + props.className} {...props}>
      <Typography className={classes.primaryAnnounce}>รับสมัคร 18&nbsp;กันยายน - 10&nbsp;ตุลาคม 2563</Typography>
      <Link to="/application" className="no-underline">
        <Button variant="contained" color="secondary" className={classes.subscribeButton}>
          <Typography variant="subtitle1" className={classes.subscribeButtonText}>
            สมัครค่ายลานเกียร์
          </Typography>
        </Button>
      </Link>
    </Box>
  )
}

export default HomeAnnouce
