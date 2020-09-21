import React from "react"
import { Link, useRouteMatch } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Container, Grid } from "@material-ui/core"

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

type ApplicationStepModuleProps = {
  children: (props: { buttonBar: React.ReactElement }) => React.ReactElement
}

const ApplicationStepModule: React.FC<ApplicationStepModuleProps> = ({ children }) => {
  const step = parseInt(useRouteMatch<{ step: string }>().params.step)
  const previousPage = `/application/step/${step - 1}`
  const nextPage = step === 6 ? `/application/finish` : `/application/step/${step + 1}`

  const classes = useStyles()
  const buttonBar = (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} item>
        <Link className="no-underline" to={previousPage}>
          <Button variant="contained" className={classes.buttonWarning} fullWidth>
            ย้อนกลับ
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} sm={6} item>
        <Link className="no-underline" to={nextPage}>
          <Button variant="contained" className={classes.buttonSuccess} fullWidth>
            ไปขั้นตอนถัดไป
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
  return <Container maxWidth="lg">{children({ buttonBar })}</Container>
}

export default ApplicationStepModule
