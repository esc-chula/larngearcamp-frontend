import React, { useCallback, useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Button, ButtonProps } from "@material-ui/core"
import { waitFbInit, fbLogin, fbLogout } from "../services/facebook.service"
import { useAuthContext } from "../providers/auth.provider"
import { useHistory } from "react-router-dom"
import { useGlobalContext } from "../providers/global.provider"

const FacebookButtonComponent: React.FC<ButtonProps> = props => {
  const [loading, setLoading] = useState(false)
  const { loginFb } = useAuthContext()
  const history = useHistory()
  const { activeSnackBar } = useGlobalContext()

  const handleClick = useCallback(async () => {
    if (loading) {
      return
    }

    setLoading(true)
    const fbResponse = (await waitFbInit) || (await fbLogin())
    if (fbResponse) {
      const { signedRequest } = fbResponse.authResponse
      try {
        await loginFb(signedRequest)
        history.push("/profile")
      } catch (error) {
        if (error.response?.data?.message === "Email already exists!") {
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

  return <Button {...props} disabled={loading} onClick={handleClick} />
}

const FacebookButtonComponentWithStyles = withStyles({
  root: {
    background: "#1877F2",
    borderRadius: "40px",
    color: "white",
    "&:hover": {
      background: "#004cbe"
    }
  }
})(FacebookButtonComponent)

export { FacebookButtonComponentWithStyles as FacebookButtonComponent }
