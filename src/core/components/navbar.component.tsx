import React, { useState, useCallback } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"
import { Link, useHistory } from "react-router-dom"
import { AppBar, Button, IconButton, Toolbar, Box, Hidden } from "@material-ui/core"
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
  underlineWhite: {
    "&:after": {
      background: "#fff"
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
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const { isLoggedIn } = useAuthContext()

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent) => {
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return
      setOpen(false)
    },
    []
  )

  const nextPage = useCallback((path: string) => () => history.push(path), [history])

  return (
    <>
      <AppBar position="static" color="secondary" className={classes.appbar}>
        <Toolbar>
          <Hidden lgUp>
            <SideBarComponent open={open} onClose={toggleDrawer(open)} />
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
            <Box display="flex" alignItems="center" className={classes.itemsRight}>
              {isLoggedIn && <AuthNavbarComponent />}
            </Box>
          </Hidden>
          <Box mr={6}>Logo</Box>
          <Hidden mdDown>
            <Box display="flex" alignItems="center" marginRight="auto" className={classes.itemsLeft}>
              <Link className={classes.underlineWhite} to="/docs">
                เอกสารการสมัคร
              </Link>
              <Link className={classes.underlineWhite} to="/qna">
                คำถามที่พบบ่อย
              </Link>
            </Box>
            <Box display="flex" alignItems="center" className={classes.itemsRight}>
              {isLoggedIn ? (
                <AuthNavbarComponent />
              ) : (
                <>
                  <Link className={classes.underlineWhite} to="/login">
                    เข้าสู่ระบบ
                  </Link>
                  <Button color="primary" variant="contained" onClick={nextPage("/register")}>
                    ลงทะเบียน
                  </Button>
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
