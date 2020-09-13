import React, { useCallback } from "react"
import { CardComponent } from "../../core/components/card.component"
import { Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom"
import { useGlobalContext } from "../../core/providers/global.provider"
import { FormProvider, useForm } from "react-hook-form"
import { PersonalProfileComponent } from "../../core/components/personalInfo/profile.component"
import { PersonalContactComponent } from "../../core/components/personalInfo/contact.component"
import { PersonalEducationComponent } from "../../core/components/personalInfo/education.component"
import { PersonalHealthComponent } from "../../core/components/personalInfo/health.component"
import { PersonalEmergencyComponent } from "../../core/components/personalInfo/emergency.component"

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(4)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  bold: {
    fontWeight: "bold"
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

const ApplicationStepTwoModule = () => {
  const classes = useStyles()
  const history = useHistory()
  const methods = useForm()
  const { setStep } = useGlobalContext()
  const { handleSubmit } = methods
  const nextPage = useCallback(
    (path: string) => () => {
      setStep(2)
      history.push(path)
    },
    [history, setStep]
  )

  const onSubmit = useCallback(() => {
    console.log("Success")
  }, [])

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardComponent maxWidth="lg" className={classes.card}>
          <PersonalProfileComponent />
          <PersonalEducationComponent />
          <PersonalHealthComponent />
          <PersonalContactComponent />
          <PersonalEmergencyComponent />
          <Grid container spacing={2}>
            <Grid xs={6} item>
              <Button onClick={nextPage("/application/step1")} variant="contained" className={classes.buttonWarning} fullWidth>
                ไปขั้นตอนถัดไป
              </Button>
            </Grid>
            <Grid xs={6} item>
              <Button onClick={nextPage("/application/step3")} variant="contained" className={classes.buttonSuccess} fullWidth>
                ย้อนกลับ
              </Button>
            </Grid>
          </Grid>
        </CardComponent>
      </form>
    </FormProvider>
  )
}

export default ApplicationStepTwoModule
