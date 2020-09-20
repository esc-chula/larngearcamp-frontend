import React from "react"
import { Box, Typography } from "@material-ui/core"

interface NavigatorComponentProps {
  step: number
}

const NavigatorComponent: React.FC<NavigatorComponentProps> = ({ step }) => {
  return (
    <Box my={3}>
      <Typography variant="h6" align="center">
        {step}
      </Typography>
    </Box>
  )
}

export { NavigatorComponent }
