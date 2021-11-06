import React from "react"
import { Link } from "react-router-dom"
import { Drawer, Box, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useAuthContext } from "../providers/auth.provider"
import { useNavBarContext } from "./navbar.component"
import { ReactComponent as LogoLong } from "../../assets/images/logo/logo_long.svg"

interface Props {
  open: boolean
  onClose?: (event: React.KeyboardEvent) => void
}

const useStyles = makeStyles(theme => ({
  content: {
    "& > *": {
      marginBottom: theme.spacing(3)
    }
  },
  homeLink: {
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    "&:after": {
      content: "initial"
    },
    "&>svg": {
      margin: "auto",
      height: 30
    }
  }
}))

const SideBarLink: React.FC<React.PropsWithChildren<{ to: string }>> = ({ to, children }) => {
  const { closeDrawer } = useNavBarContext()
  return (
    <Link to={to} onClick={closeDrawer}>
      {children}
    </Link>
  )
}

const SideBarComponent: React.FC<Props> = ({ open, onClose }) => {
  const classes = useStyles()
  const { isAdminLoggedIn, isLoggedIn } = useAuthContext()

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box minWidth={200} height="100%" display="flex" flexDirection="column" alignItems="center" py={6} px={5} className={classes.content}>
        <Link className={classes.homeLink + " no-underline"} to="/">
          <LogoLong />
        </Link>
        <SideBarLink to="/docs">เอกสารการสมัคร</SideBarLink>
        <SideBarLink to="/qna">คำถามที่พบบ่อย</SideBarLink>
        <SideBarLink to="/privacy">นโยบายความเป็นส่วนตัว</SideBarLink>
        {isAdminLoggedIn && <SideBarLink to="/admin/dashboard">dashboard</SideBarLink>}
        {!isLoggedIn && (
          <>
            <SideBarLink to="/login">เข้าสู่ระบบ</SideBarLink>
            <SideBarLink to="/register">
              <Button color="primary" variant="contained" fullWidth>
                ลงทะเบียน
              </Button>
            </SideBarLink>
          </>
        )}
      </Box>
    </Drawer>
  )
}

export { SideBarComponent }
