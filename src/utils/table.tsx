import Order from "../core/models/order.model"

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) return -1
  if (b[orderBy] > a[orderBy]) return 1
  return 0
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: Array<T>, comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el: T, index: number) => {
    return { el, index }
  })
  stabilizedThis.sort((a, b) => {
    const order = comparator(a.el, b.el)
    if (order !== 0) return order
    return a.index - b.index
  })
  return stabilizedThis.map(el => el.el)
}

export { descendingComparator, getComparator, stableSort }
