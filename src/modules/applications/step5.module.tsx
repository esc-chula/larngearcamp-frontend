import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Container, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  question: {
    "&>*": {
      marginBottom: theme.spacing(6)
    }
  },
  bold: {
    fontWeight: 500
  },
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

const ApplicationStepFiveModule = () => {
  const classes = useStyles()
  const history = useHistory()
  const nextPage = useCallback(
    (path: string) => () => {
      history.push(path)
    },
    [history]
  )
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid xs={6} item>
            <Button onClick={nextPage("/application/step4")} variant="contained" className={classes.buttonWarning} fullWidth>
              ย้อนกลับ
            </Button>
          </Grid>
          <Grid xs={6} item>
            <Button onClick={nextPage("/application/step6")} variant="contained" className={classes.buttonSuccess} fullWidth>
              ไปขั้นตอนถัดไป
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ApplicationStepFiveModule
