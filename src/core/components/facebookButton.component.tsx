import React, { useCallback, useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Button, ButtonProps } from "@material-ui/core"
import { waitFbInit, fbLogin } from "../services/facebook.service"
import { useAuthContext } from "../providers/auth.provider"
import { useHistory } from "react-router-dom"

const FacebookButtonComponent: React.FC<ButtonProps> = props => {
  const [loading, setLoading] = useState(false)
  const { loginFb } = useAuthContext()
  const history = useHistory()

  const handleClick = useCallback(async () => {
    if (loading) {
      return
    }

    setLoading(true)
    const fbResponse = (await waitFbInit) || (await fbLogin())
    if (fbResponse) {
      const { signedRequest } = fbResponse.authResponse
      const success = await loginFb(signedRequest)
      if (success) {
        history.push("/profile")
      }
    }
    setLoading(false)
  }, [loading, loginFb, history])

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
