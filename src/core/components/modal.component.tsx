import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Backdrop, Box } from "@material-ui/core"
import { CardComponent } from "./card.component"

interface LoadingProps {
  open: boolean
  onClick: (event: React.MouseEvent) => void
}

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.tooltip + 1,
    background: "rgba(0,0,0,0.35)"
  }
}))

const ModalComponent: React.FC<LoadingProps> = ({ open, onClick }) => {
  const classes = useStyles()
  return (
    <Backdrop className={classes.backdrop} open={open} transitionDuration={500} onClick={onClick}>
      <CardComponent maxWidth="sm">
        <Box display="flex" justifyContent="center" alignItems="center">
          <div>Modal</div>
        </Box>
      </CardComponent>
    </Backdrop>
  )
}

export { ModalComponent }
