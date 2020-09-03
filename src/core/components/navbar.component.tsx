import React, { useState } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Button, IconButton, Toolbar, Box, Link, Hidden } from "@material-ui/core"
import { SideBarComponent } from "./sidebar.component"

const useStyles = makeStyles(theme => ({
  itemLeft: {
    marginRight: theme.spacing(2),
    color: "#fff"
  },
  itemRight: {
    marginLeft: theme.spacing(2),
    color: "#fff"
  }
}))

const NavBarComponent = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setOpen(!open)
  }

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Hidden smUp>
            <SideBarComponent open={open} onClose={toggleDrawer(open)} />
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box mx={2}>Logo</Box>
          <Hidden xsDown>
            <Box display="flex" alignItems="center" marginRight="auto">
              <Link className={classes.itemLeft}>เอกสารการสมัคร</Link>
              <Link className={classes.itemLeft}>คำถามที่พบบ่อย</Link>
            </Box>
            <Box display="flex" alignItems="center">
              <Link href="/login" className={classes.itemRight}>
                เข้าสู่ระบบ
              </Link>
              <Button color="primary" variant="contained" className={classes.itemRight}>
                ลงทะเบียน
              </Button>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  )
}

export { NavBarComponent }
