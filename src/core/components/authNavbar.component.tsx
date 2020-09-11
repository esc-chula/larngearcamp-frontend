import React, { useState, useCallback } from "react"
import { Avatar, Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import AuthService from "../services/auth.service"
import { useHistory } from "react-router-dom"

const AuthNavbarComponent: React.FC = () => {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = useCallback(event => {
    setAnchorEl(event.currentTarget)
  }, [])
  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])
  const logout = useCallback(async () => {
    await AuthService.logout()
    history.push("/")
  }, [history])

  return (
    <>
      <div onClick={handleClick}>
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
        <MenuItem onClick={() => history.push("/profile")}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>
        <MenuItem onClick={logout}>
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
