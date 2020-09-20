import TableData from "./tableData.model"

interface HeadCellModel {
  disablePadding: boolean
  id: keyof TableData
  label: string
  numeric: boolean
}

export default HeadCellModel
