import React from "react"
import { makeStyles, Typography, ButtonProps, withStyles, Button } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import googleIcon from "../../assets/images/icon/google-icon.svg"

const useStyle = makeStyles(theme => ({
  googleIcon: {
    marginRight: theme.spacing(3.5)
  },
  capitalText: {
    textTransform: "capitalize"
  }
}))

const GoogleButtonComponent: React.FC<ButtonProps> = props => {
  const classes = useStyle()
  return (
    <Button {...props}>
      <img src={googleIcon} alt="" className={classes.googleIcon} />
      <Typography variant="button" className={classes.capitalText}>
        เข้าสู่ระบบด้วยบัญชี Google
      </Typography>
    </Button>
  )
}

const GoogleButtonComponentWithStyles = withStyles(theme => ({
  root: {
    background: "#ffffff",
    border: "1px solid #333333",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: theme.spacing(4),
    color: grey[700],
    "&:hover": {
      background: "#dddddd"
    }
  }
}))(GoogleButtonComponent)

export { GoogleButtonComponentWithStyles as GoogleButtonComponent }
