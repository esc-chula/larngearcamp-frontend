import React from "react"
import { Box, Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../../utils/conversion"

const useStyle = makeStyles(theme => ({
  primaryAnnounce: {
    color: theme.palette.primary.main,
    fontSize: pxToRem(52),
    lineHeight: pxToRem(78),
    margin: "0 0 32px 0",
    fontWeight: 500
  },
  subscribeButton: {
    width: "370px",
    height: "60px"
  },
  subscribeButtonText: {
    fontSize: pxToRem(28),
    fontWeight: 500,
    lineHeight: pxToRem(42)
  }
}))
const HomeAnnouce: React.FC = props => {
  const classes = useStyle()
  return (
    <Box textAlign="center">
      <h3 className={classes.primaryAnnounce + " kanit"}>รับสมัคร 18 กันยายน - 10 ตุลาคม 2563</h3>
      <Button variant="contained" color="secondary" className={classes.subscribeButton}>
        <Typography variant="subtitle1" className={classes.subscribeButtonText}>
          สมัครค่ายลานเกียร์
        </Typography>
      </Button>
    </Box>
  )
}

export default HomeAnnouce
