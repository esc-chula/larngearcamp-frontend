import React from "react"
import { LinearProgress, Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import applicationStepConstant from "../constants/applicationStep.constant"

interface NavigatorComponentProps {
  step: number
}

const useStyles = makeStyles(theme => ({
  title: {
    color: "#fff",
    marginTop: theme.spacing(5)
  },
  container: {
    maxWidth: theme.breakpoints.width("lg"),
    margin: theme.spacing(2, 0, 5, 0)
  }
}))

const NavigatorComponent: React.FC<NavigatorComponentProps> = ({ step }) => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" className={classes.title}>
          {`${step}. ${applicationStepConstant[step - 1].title}`}
        </Typography>

        <div className={classes.container}>
          <LinearProgress variant="determinate" value={(step / 6) * 100} />
        </div>
      </Container>
    </>
  )
}

export { NavigatorComponent }
