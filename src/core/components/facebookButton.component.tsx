import { withStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"

const FacebookButtonComponent = withStyles({
  root: {
    background: "#1877F2",
    borderRadius: "40px",
    color: "white",
    "&:hover": {
      background: "#004cbe"
    }
  }
})(Button)

export { FacebookButtonComponent }
