import React, { useState, useCallback, createContext, useContext } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { AppBar, Button, IconButton, Toolbar, Box, Hidden } from "@material-ui/core"
import { SideBarComponent } from "./sidebar.component"
import { AuthNavbarComponent } from "./authNavbar.component"
import { useAuthContext } from "../providers/auth.provider"
import { ReactComponent as LogoInverse } from "../../assets/images/logo/logo_inverse.svg"

interface NavBarContextValue {
  closeDrawer: () => void
}

const NavBarContext = createContext({} as NavBarContextValue)

export function useNavBarContext() {
  return useContext(NavBarContext)
}

const useStyles = makeStyles(theme => ({
  appbar: {
    width: "100%",
    maxWidth: "100%",
    padding: `0 env(safe-area-inset-right) 0 env(safe-area-inset-left)`,
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(0, 5)
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
  },
  homeLink: {
    display: "flex",
    color: "#fff",
    marginRight: theme.spacing(6),
    "&:after": {
      content: "initial"
    },
    "&>svg": {
      height: 30
    }
  }
}))

const NavBarComponent = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { isLoggedIn } = useAuthContext()

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
      <AppBar position="sticky" color="secondary" className={classes.appbar}>
        <Toolbar>
          <Hidden lgUp>
            <SideBarComponent open={open} onClose={toggleDrawer(open)} />
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
            <Box display="flex" alignItems="center" marginLeft="auto">
              {isLoggedIn && <AuthNavbarComponent />}
            </Box>
          </Hidden>
          <Hidden mdDown>
            <Link className={classes.homeLink + " no-underline"} to="/">
              <LogoInverse />
            </Link>
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
