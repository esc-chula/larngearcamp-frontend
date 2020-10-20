import { Paper, TableContainer, Table, TableBody, TablePagination, TableRow, TableCell } from "@material-ui/core"
import React, { useCallback, useMemo, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { UserCellComponent } from "./userCell.component"
import { EnhancedTableHead } from "./enhancedTableHead.component"
import TableData from "../models/tableData.model"
import Order from "../models/order.model"
import { getComparator, stableSort } from "../../utils/table"

export interface UserTableComponentProps {
  usersData: Array<TableData> | undefined
}

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(4, 0, 8, 0),
    width: "auto"
  },
  title: {
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  }
}))

const UserTableComponent: React.FC<UserTableComponentProps> = ({ usersData }) => {
  const classes = useStyles()
  const [order, setOrder] = useState<Order>("asc")
  const [orderBy, setOrderBy] = useState<keyof TableData>("name")
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleRequestSort = useCallback(
    (event: React.MouseEvent<unknown>, property: keyof TableData) => {
      const isAsc = orderBy === property && order === "asc"
      setOrder(isAsc ? "desc" : "asc")
      setOrderBy(property)
    },
    [order, orderBy]
  )

  const handleChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }, [])

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage)
  }, [])

  const emptyRows = useMemo(() => {
    return rowsPerPage - Math.min(rowsPerPage, !!usersData ? usersData.length - page * rowsPerPage : 0)
  }, [rowsPerPage, page, usersData])

  return (
    <>
      <TableContainer component={Paper} className={classes.paper}>
        <Table aria-label="users table" stickyHeader>
          <EnhancedTableHead classes={classes} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
          <TableBody>
            {!!usersData && (
              <>
                {stableSort(usersData, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                  .map((row, index) => (
                    <UserCellComponent content={row} key={index} />
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 54 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
        </Table>
        {!!usersData && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 30, 35, 50]}
            component="div"
            count={usersData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </TableContainer>
    </>
  )
}

export { UserTableComponent }
