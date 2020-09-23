import React, { useState, useCallback, createContext, useContext } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { AppBar, Button, IconButton, Toolbar, Box, Hidden } from "@material-ui/core"
import { SideBarComponent } from "./sidebar.component"
import { AuthNavbarComponent } from "./authNavbar.component"
import { useAuthContext } from "../providers/auth.provider"
import { useGlobalContext } from "../providers/global.provider"

interface NavBarContextValue {
  closeDrawer: () => void
}

const NavBarContext = createContext({} as NavBarContextValue)

export function useNavBarContext() {
  return useContext(NavBarContext)
}

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
  const [open, setOpen] = useState(false)
  const { isLoggedIn } = useAuthContext()
  const { setLoading, setModal } = useGlobalContext()

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent) => {
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return
      setOpen(false)
    },
    []
  )

  const closeDrawer = useCallback(() => setOpen(false), [])

  return (
    <NavBarContext.Provider value={{ closeDrawer }}>
      <AppBar position="static" color="secondary" className={classes.appbar}>
        <Toolbar>
          <Hidden lgUp>
            <SideBarComponent open={open} onClose={toggleDrawer(open)} />
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box mr={6}>Logo</Box>
          <Hidden lgUp>
            <Box display="flex" alignItems="center" marginLeft="auto">
              {isLoggedIn && <AuthNavbarComponent />}
            </Box>
          </Hidden>

          <Hidden mdDown>
            <Box display="flex" alignItems="center" marginRight="auto" className={classes.itemsLeft}>
              <Link className={classes.underlineWhite} to="/docs">
                เอกสารการสมัคร
              </Link>
              <Link className={classes.underlineWhite} to="/qna">
                คำถามที่พบบ่อย
              </Link>
              <Button color="primary" variant="contained" onClick={() => setLoading(true)}>
                ทดสอบ loading
              </Button>
              <Button color="primary" variant="contained" onClick={() => setModal(true)}>
                ทดสอบ Modal
              </Button>
            </Box>
            <Box display="flex" alignItems="center" className={classes.itemsRight}>
              {isLoggedIn ? (
                <AuthNavbarComponent />
              ) : (
                <>
                  <Link className={classes.underlineWhite} to="/login">
                    เข้าสู่ระบบ
                  </Link>
                  <Link to="/register">
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
    </NavBarContext.Provider>
  )
}

export { NavBarComponent }
