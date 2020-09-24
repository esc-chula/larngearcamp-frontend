import React, { useCallback, useMemo } from "react"
import { useRouteMatch, Link, useHistory } from "react-router-dom"
import { Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useGlobalContext } from "../providers/global.provider"

const useStyles = makeStyles(theme => ({
  buttonSuccess: {
    marginTop: theme.spacing(2),
    color: "white",
    background: theme.palette.success.main,
    "&:hover": {
      background: theme.palette.success.dark
    }
  },
  buttonWarning: {
    marginTop: theme.spacing(2),
    color: "white",
    background: theme.palette.warning.main,
    "&:hover": {
      background: theme.palette.warning.dark
    }
  }
}))

export type ButtonBarProps = {
  beforeNavigate?: () => boolean | Promise<boolean>
}

const ButtonBar: React.FC<ButtonBarProps> = ({ beforeNavigate }) => {
  const step = parseInt(useRouteMatch<{ step: string }>().params.step)
  const history = useHistory()
  const previousPage = `/application/step/${step - 1}`
  const nextPage = `/application/step/${step + 1}`
  const classes = useStyles()
  const { setLoading } = useGlobalContext()

  const wrappedBeforeNavigate = useMemo(() => {
    if (!beforeNavigate) {
      return null
    }
    return async () => {
      try {
        setLoading(true)
        return await beforeNavigate()
      } finally {
        setLoading(false)
      }
    }
  }, [beforeNavigate, setLoading])

  const handlePrevious = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (wrappedBeforeNavigate) {
        e.preventDefault()
        if (await wrappedBeforeNavigate()) {
          history.push(previousPage)
        }
      }
    },
    [wrappedBeforeNavigate, history, previousPage]
  )

  const handleNext = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (wrappedBeforeNavigate) {
        e.preventDefault()
        if (await wrappedBeforeNavigate()) {
          history.push(nextPage)
        }
      }
    },
    [wrappedBeforeNavigate, history, nextPage]
  )

  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} item>
        <Link className="no-underline" to={previousPage}>
          <Button variant="contained" className={classes.buttonWarning} fullWidth onClick={handlePrevious}>
            ย้อนกลับ
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} sm={6} item>
        <Link className="no-underline" to={nextPage}>
          <Button variant="contained" className={classes.buttonSuccess} fullWidth onClick={handleNext}>
            ไปขั้นตอนถัดไป
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default ButtonBar
