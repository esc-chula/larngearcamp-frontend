import React, { useState, useCallback } from "react"
import { TableRow, TableCell, Collapse, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import TableData from "../models/tableData.model"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { CheckListComponent } from "./checkList.component"

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
    maxWidth: 180
  },
  fitContent: {
    width: "fit-content"
  }
}))

const UserCellComponent: React.FC<UserCellProps> = ({ content }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <>
      <TableRow hover>
        <TableCell className={classes.nameTitle}>
          <div className={classes.fitContent}>
            <Link to="/user/userid" className={classes.link} target="_blank">
              {content.name}
            </Link>
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
