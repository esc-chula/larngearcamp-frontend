import React, { useState, useCallback } from "react"
import { TableRow, TableCell, Collapse, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TableData from "../models/tableData.model"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { CheckListComponent } from "./checkList.component"
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
  const [open, setOpen] = useState(false)
  const { setSelectedUser } = useAdminContext()

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])

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
          <IconButton aria-label="expand row" size="small" onClick={handleClick}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CheckListComponent />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export { UserCellComponent }
