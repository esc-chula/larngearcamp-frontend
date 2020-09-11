import React, { useState } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Button, IconButton, Toolbar, Box, Link, Hidden } from "@material-ui/core"
import { SideBarComponent } from "./sidebar.component"
import { AuthNavbarComponent } from "./authNavbar.component"
import { useAuthContext } from "../providers/auth.provider"

const useStyles = makeStyles(theme => ({
  appbar: {
    padding: theme.spacing(0, 10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2)
    }
  },
  itemsLeft: {
    "&>*": {
      marginRight: theme.spacing(2),
      color: "#fff"
    }
  },
  itemsRight: {
    "&>*": {
      marginLeft: theme.spacing(2),
      color: "#fff"
    }
  }
}))

const NavBarComponent = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { isLoggedIn } = useAuthContext()

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setOpen(!open)
  }

  return (
    <>
      <AppBar position="static" color="secondary" className={classes.appbar}>
        <Toolbar>
          <Hidden lgUp>
            <SideBarComponent open={open} onClose={toggleDrawer(open)} />
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box mr={6}>Logo</Box>
          <Hidden mdDown>
            <Box display="flex" alignItems="center" marginRight="auto" className={classes.itemsLeft}>
              <Link href="/docs">เอกสารการสมัคร</Link>
              <Link href="/qna">คำถามที่พบบ่อย</Link>
            </Box>
            <Box display="flex" alignItems="center" className={classes.itemsRight}>
              {isLoggedIn ? (
                <AuthNavbarComponent />
              ) : (
                <>
                  <Link href="/login">เข้าสู่ระบบ</Link>
                  <Link href="/register">
                    <Button color="primary" variant="contained">
                      ลงทะเบียน
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  )
}

export { NavBarComponent }
