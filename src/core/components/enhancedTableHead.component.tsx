import React from "react"
import { TableHead, TableRow, TableCell, TableSortLabel } from "@material-ui/core"
import Order from "../models/order.model"
import TableData from "../models/tableData.model"
import HeadCellModel from "../models/headCell.model"

const headCells: HeadCellModel[] = [
  { id: "name", numeric: false, disablePadding: false, label: "ชื่อ-นามสกุล" },
  { id: "documentStatus", numeric: true, disablePadding: false, label: "สถานะเอกสาร" },
  { id: "applicantStatus", numeric: true, disablePadding: false, label: "สถานะผู้สมัคร" }
]

interface EnhancedTableProps {
  classes?: any
  order: Order
  orderBy: string
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TableData) => void
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = props => {
  const { order, orderBy, onRequestSort } = props

  const createSortHandler = (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right">เพิ่มเติม</TableCell>
      </TableRow>
    </TableHead>
  )
}

export { EnhancedTableHead }
