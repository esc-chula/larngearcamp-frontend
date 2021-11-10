import React, { useCallback, useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Button, ButtonProps, makeStyles, Typography } from "@material-ui/core"
import { waitFbInit, fbLogin, fbLogout } from "../services/facebook.service"
import { useAuthContext } from "../providers/auth.provider"
import { useHistory } from "react-router-dom"
import { useGlobalContext } from "../providers/global.provider"
import { AxiosError } from "axios"
import facebookIcon from "../../assets/images/icon/facebook-icon.svg"

const useStyle = makeStyles(theme => ({
  fb: {},
  fbIcon: {
    width: "10px"
  },
  capitalText: {
    textTransform: "capitalize",
    fontSize: "1rem",
    width: "100%"
  }
}))

const FacebookButtonComponent: React.FC<ButtonProps> = props => {
  const [loading, setLoading] = useState(false)
  const { loginFb } = useAuthContext()
  const classes = useStyle()
  const history = useHistory()
  const { activeSnackBar } = useGlobalContext()

  const handleClick = useCallback(async () => {
    if (loading) {
      return
    }

    setLoading(true)

    const fbResponse = (await waitFbInit) || (await fbLogin())
    if (fbResponse) {
      const { accessToken } = fbResponse.authResponse
      try {
        await loginFb(accessToken)
        history.push("/profile")
      } catch (error) {
        if ((error as AxiosError).response?.data?.message === "Email already exists!") {
          activeSnackBar({ type: "error", message: "Email นี้ถูกใช้ไปแล้ว โปรดเข้าสู่ระบบด้วยรหัสผ่าน" })
        } else {
          activeSnackBar({ type: "error", message: "เข้าสู่ระบบด้วย Facebook ไม่สำเร็จ" })
        }
      } finally {
        fbLogout()
      }
    }
    setLoading(false)
  }, [loading, loginFb, activeSnackBar, history])

  return (
    <Button {...props} disabled={loading} onClick={handleClick} className={`${props.className} ${classes.fb}`}>
      <img src={facebookIcon} alt="facebookIcon" className={classes.fbIcon} />
      <Typography variant="button" className={classes.capitalText}>
        เข้าสู่ระบบด้วยบัญชี Facebook
      </Typography>
    </Button>
  )
}

const FacebookButtonComponentWithStyles = withStyles(theme => ({
  root: {
    background: "#1877F2",
    borderRadius: "40px",
    color: "white",
    paddingLeft: theme.spacing(2.5),
    display: "flex",
    justifyContent: "flex-start",
    "&:hover": {
      background: "#004cbe"
    }
  }
}))(FacebookButtonComponent)

export { FacebookButtonComponentWithStyles as FacebookButtonComponent }
