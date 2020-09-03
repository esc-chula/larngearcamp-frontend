import React from "react"
import { Drawer, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import classes from "*.module.css"

interface Props {
  open: boolean
  onClose?: (event: KeyboardEvent) => void
}

const SideBarComponent: React.FC<Props> = ({ open, ...other }) => {
  return (
    <Drawer anchor="left" open={open} {...other}>
      <Box minWidth={220} height="100%" display="flex" flexDirection="column" alignItems="center">
        <div>wowza</div>
        <div>wowza</div>
      </Box>
    </Drawer>
  )
}

export { SideBarComponent }
