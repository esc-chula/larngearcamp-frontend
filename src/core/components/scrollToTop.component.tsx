import { useHistory } from "react-router"
import { useEffect } from "react"

const ScrollToTop: React.FC = () => {
  const history = useHistory()
  useEffect(() => {
    return history.listen((_, action) => {
      if (action === "PUSH" || action === "REPLACE") {
        window.scrollTo(0, 0)
      }
    })
  }, [history])
  return null
}

export { ScrollToTop }
