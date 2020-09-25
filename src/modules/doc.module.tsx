import { makeStyles } from "@material-ui/core"
import React from "react"
import BackgroundComponent from "../core/components/background.component"
import { CardComponent } from "../core/components/card.component"
import { DocComponent } from "../core/components/doc.component"

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(8)
  },
  button: {
    marginTop: theme.spacing(2),
    color: "white",
    background: theme.palette.success.main,
    "&:hover": {
      background: theme.palette.success.dark
    }
  }
}))

const DocModule: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <BackgroundComponent type="bg1" />
      {/* <RedWaveComponent /> */}
      <CardComponent maxWidth="lg" className={classes.card}>
        <DocComponent />
      </CardComponent>
    </>
  )
}

export { DocModule }
