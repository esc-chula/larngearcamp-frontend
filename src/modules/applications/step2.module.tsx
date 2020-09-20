import React, { useCallback } from "react"
import { CardComponent } from "../../core/components/card.component"
import { Divider, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { FormProvider, useForm } from "react-hook-form"
import { PersonalProfileComponent } from "../../core/components/personalInfo/profile.component"
import { PersonalContactComponent } from "../../core/components/personalInfo/contact.component"
import { PersonalEducationComponent } from "../../core/components/personalInfo/education.component"
import { PersonalHealthComponent } from "../../core/components/personalInfo/health.component"
import { PersonalEmergencyComponent } from "../../core/components/personalInfo/emergency.component"
import ApplicationStepModule from "./stepLayout.module"

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
      marginTop: theme.spacing(6)
    },
    "&>*:first-child": {
      marginTop: theme.spacing(0)
    }
  },
  bold: {
    fontWeight: 500
  }
}))

const ApplicationStepTwoModule = () => {
  const classes = useStyles()
  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = useCallback(() => {
    console.log("Success")
  }, [])

  return (
    <ApplicationStepModule>
      {({ buttonBar }) => (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardComponent maxWidth="lg" className={classes.card}>
              <Typography variant="h5" align="center" className={classes.bold}>
                ข้อมูลส่วนตัว
              </Typography>
              <Divider className={classes.divider} />
              <div className={classes.question}>
                <PersonalProfileComponent />
                <PersonalEducationComponent />
                <PersonalHealthComponent />
                <PersonalContactComponent />
                <PersonalEmergencyComponent />
              </div>

              {buttonBar}
            </CardComponent>
          </form>
        </FormProvider>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepTwoModule
