import { useLocation } from "react-router-dom"
import qs from "query-string"

export const useQueryString = () => {
  const { search } = useLocation()
  return qs.parse(search)
}
