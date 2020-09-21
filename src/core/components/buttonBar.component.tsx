import React from "react"
import { useRouteMatch, Link } from "react-router-dom"
import { Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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

const ButtonBar: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const step = parseInt(useRouteMatch<{ step: string }>().params.step)
  const previousPage = `/application/step/${step - 1}`
  const nextPage = step === 6 ? `/application/finish` : `/application/step/${step + 1}`
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} item>
        <Link className="no-underline" to={previousPage}>
          <Button variant="contained" className={classes.buttonWarning} fullWidth>
            ย้อนกลับ
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} sm={6} item>
        <Link className="no-underline" to={nextPage} onClick={onSubmit}>
          <Button variant="contained" className={classes.buttonSuccess} fullWidth>
            ไปขั้นตอนถัดไป
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default ButtonBar
