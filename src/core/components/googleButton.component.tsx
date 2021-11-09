import React, { useEffect } from "react"
import { ButtonProps, withStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { useAuthContext } from "../providers/auth.provider"
import { useHistory } from "react-router"
import { useGlobalContext } from "../providers/global.provider"

const GoogleButtonComponent: React.FC<ButtonProps> = props => {
  const { loginGoogle } = useAuthContext()
  const history = useHistory()
  const { activeSnackBar } = useGlobalContext()

  useEffect(() => {
    const handleCallback = async (res: any) => {
      try {
        await loginGoogle(res.credential)
        history.push("/profile")
      } catch (err) {
        activeSnackBar({ type: "error", message: "เข้าสู่ระบบด้วย Facebook ไม่สำเร็จ" })
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
        type: "standard"
      })
    }
    initGoogleButton()
  }, [history, loginGoogle])

  return <div id="google_signin" style={{ width: "100%" }} />
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
