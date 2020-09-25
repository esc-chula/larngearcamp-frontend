import React from "react"
import { Box, MobileStepper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

interface NavigatorComponentProps {
  step: number
}

const useStyles = makeStyles(theme => ({
  stepper: {
    backgroundColor: "transparent"
  },
  dot: {
    backgroundColor: "#EEEEEE"
  },
  dotActive: {
    backgroundColor: theme.palette.primary.light
  }
}))

const NavigatorComponent: React.FC<NavigatorComponentProps> = ({ step }) => {
  const classes = useStyles()
  return (
    <Box my={3} display="flex" justifyContent="center">
      <MobileStepper
        className={classes.stepper}
        classes={{
          dot: classes.dot,
          dotActive: classes.dotActive
        }}
        variant="dots"
        steps={6}
        position="static"
        activeStep={step - 1}
        nextButton={null}
        backButton={null}
      />
    </Box>
  )
}

export { NavigatorComponent }
