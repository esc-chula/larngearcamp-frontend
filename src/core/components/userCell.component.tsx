import React, { useState, useCallback } from "react"
import { TableRow, TableCell, IconButton, Menu, MenuItem } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TableData from "../models/tableData.model"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { useAdminContext } from "../providers/admin.provider"
import { Link as ScrollLink } from "react-scroll"

interface UserCellProps {
  content: TableData
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3)
  },
  link: {
    color: theme.palette.secondary.main,
    "&:after": {
      background: theme.palette.secondary.main
    }
  },
  center: {
    margin: "auto"
  },
  nameTitle: {
    minWidth: 180,
    maxWidth: 180
  },
  fitContent: {
    width: "fit-content"
  }
}))

const UserCellComponent: React.FC<UserCellProps> = ({ content }) => {
  const classes = useStyles()
  const { setSelectedUser } = useAdminContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <>
      <TableRow hover>
        <TableCell className={classes.nameTitle}>
          <div className={classes.fitContent}>
            <ScrollLink
              to="userdata"
              className={classes.link}
              onClick={() => setSelectedUser(content)}
              spy
              smooth
              offset={-100}
              duration={500}
              activeClass="active">
              {content.name}
            </ScrollLink>
          </div>
        </TableCell>
        <TableCell align="right">{content.documentStatus}</TableCell>
        <TableCell align="right">{content.applicantStatus}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="expand row" size="small" onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose /* Delete Account */}>Delete</MenuItem>
      </Menu>
    </>
  )
}

export { UserCellComponent }
