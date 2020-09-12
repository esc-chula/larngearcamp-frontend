import React, { useState, useCallback } from "react"
import { Avatar, Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import AuthService from "../services/auth.service"
import { useHistory } from "react-router-dom"
import { useGlobalContext } from "../providers/global.provider"
import { useAuthContext } from "../providers/auth.provider"

const AuthNavbarComponent: React.FC = () => {
  const history = useHistory()
  const { setAccessToken } = useAuthContext()
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

  const nextPage = useCallback(
    (path: string) => () => {
      setAnchorEl(null)
      history.push(path)
    },
    [history]
  )

  const logout = useCallback(async () => {
    setAnchorEl(null)
    setAccessToken(null)
    setLoading(true)
    await AuthService.logout()
    setLoading(false)
    history.push("/")
  }, [history, setLoading, setAccessToken])

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
        <MenuItem onClick={nextPage("/profile")}>
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
