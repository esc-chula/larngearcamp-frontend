import { withStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const GoogleButtonComponent = withStyles(theme => ({
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
}))(Button)

export { GoogleButtonComponent }
