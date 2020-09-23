import React, { useState, useCallback } from "react"
import { Avatar, Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import { useHistory, Link } from "react-router-dom"
import { useGlobalContext } from "../providers/global.provider"
import { useAuthContext } from "../providers/auth.provider"
import { makeStyles } from "@material-ui/core/styles"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"

const useStyles = makeStyles(theme => ({
  cursor: {
    cursor: "pointer"
  }
}))

const AuthNavbarComponent: React.FC = () => {
  const history = useHistory()
  const classes = useStyles()
  const { isAdminLoggedIn, logout } = useAuthContext()
  const { setLoading } = useGlobalContext()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = useCallback(event => {
    setAnchorEl(event.currentTarget)
  }, [])
  const handleClose = useCallback((event: React.KeyboardEvent) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setAnchorEl(null)
  }, [])

  const clearAnchorEl = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const logoutClicked = useCallback(async () => {
    setAnchorEl(null)
    setLoading(true)
    await logout()
    setLoading(false)
    history.push("/")
  }, [history, setLoading, logout])

  return (
    <>
      <div onClick={handleClick} className={classes.cursor}>
        <Avatar alt="avatar">H</Avatar>
      </div>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={3}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}>
        <Link onClick={clearAnchorEl} className="no-underline" to="/profile">
          <MenuItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
        </Link>

        {isAdminLoggedIn && (
          <Link onClick={clearAnchorEl} className="no-underline" to="/admin/dashboard">
            <MenuItem>
              <ListItemIcon>
                <SupervisorAccountIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </MenuItem>
          </Link>
        )}

        <MenuItem onClick={logoutClicked}>
          <ListItemIcon>
            <MeetingRoomIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </>
  )
}

export { AuthNavbarComponent }
