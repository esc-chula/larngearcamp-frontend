import React, { useCallback, useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Button, ButtonProps } from "@material-ui/core"
import { waitFbInit, fbLogin } from "../services/facebook.service"
import { useAuthContext } from "../providers/auth.provider"

const FacebookButtonComponent: React.FC<ButtonProps> = props => {
  const [loading, setLoading] = useState(false)
  const { loginFb } = useAuthContext()

  const handleClick = useCallback(async () => {
    if (loading) {
      return
    }

    setLoading(true)
    const fbResponse = (await waitFbInit) || (await fbLogin())
    if (fbResponse) {
      const { signedRequest } = fbResponse.authResponse
      loginFb(signedRequest)
    }
    setLoading(false)
  }, [loading, loginFb])

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
