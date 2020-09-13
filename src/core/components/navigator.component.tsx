import React from "react"
import { useGlobalContext } from "../providers/global.provider"
import { Box, Typography } from "@material-ui/core"

const NavigatorComponent = () => {
  const { step } = useGlobalContext()
  return (
    <Box my={3}>
      <Typography variant="h6" align="center">
        {step}
      </Typography>
    </Box>
  )
}

export { NavigatorComponent }
