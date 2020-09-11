import React from "react"
import { Link } from "react-router-dom"
import { Drawer, Box, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

interface Props {
  open: boolean
  onClose?: (event: React.KeyboardEvent) => void
}

const useStyles = makeStyles(theme => ({
  content: {
    "& > *": {
      marginBottom: theme.spacing(3)
    }
  }
}))

const SideBarComponent: React.FC<Props> = ({ open, onClose }) => {
  const classes = useStyles()

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box minWidth={200} height="100%" display="flex" flexDirection="column" alignItems="center" py={6} px={5} className={classes.content}>
        <div>Logo</div>
        <Link to="/docs">เอกสารการสมัคร</Link>
        <Link to="/qna">คำถามที่พบบ่อย</Link>
        <Link to="/login">เข้าสู่ระบบ</Link>
        <Button color="primary" variant="contained" fullWidth>
          ลงทะเบียน
        </Button>
      </Box>
    </Drawer>
  )
}

export { SideBarComponent }
