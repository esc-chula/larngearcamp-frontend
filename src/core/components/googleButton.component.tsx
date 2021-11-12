import React, { useEffect } from "react"
import { Button, ButtonProps, makeStyles, Typography, withStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { useAuthContext } from "../providers/auth.provider"
import { useHistory } from "react-router"
import { useGlobalContext } from "../providers/global.provider"

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
  const { loginGoogle } = useAuthContext()
  const history = useHistory()
  const classes = useStyle()
  const { activeSnackBar } = useGlobalContext()

  useEffect(() => {
    const handleCallback = async (res: any) => {
      try {
        await loginGoogle(res.credential)
        history.push("/profile")
      } catch (err) {
        activeSnackBar({ type: "error", message: "เข้าสู่ระบบด้วย Google ไม่สำเร็จ" })
      }
    }

    const initGoogleButton = async () => {
      const _window = window as typeof window & { google: any }
      _window.google.accounts.id.initialize({
        client_id: "774746738859-09mup9bt2u45rd37c089em47khe4hcae.apps.googleusercontent.com",
        callback: handleCallback
      })
      _window.google.accounts.id.renderButton(document.getElementById("google_signin"), {
        theme: "outline",
        size: "large",
        shape: "pill",
        logo_alignment: "left",
        type: "icon"
      })
    }
    initGoogleButton()
  }, [activeSnackBar, history, loginGoogle])

  return (
    <>
      <div id="google_signin" style={{ width: "100%", display: "none" }} />
      <Button
        onClick={e => {
          e.stopPropagation()

          const el = document.querySelectorAll('[role="button"]')[0] as HTMLElement
          el.click()
        }}
        {...props}>
        <img src={googleIcon} alt="googleIcon" className={classes.googleIcon} />
        <Typography variant="button" className={classes.capitalText}>
          เข้าสู่ระบบด้วยบัญชี Google
        </Typography>
      </Button>
    </>
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
