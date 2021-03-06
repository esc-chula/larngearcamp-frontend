import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Divider, Typography } from "@material-ui/core"
import { CardComponent } from "../../core/components/card.component"
import ApplicationStepModule from "./stepLayout.module"
import { useHistory } from "react-router-dom"
import { useApplicationStateContext } from "../../core/providers/applicationState.provider"
import { useGlobalContext } from "../../core/providers/global.provider"
import { AxiosError } from "axios"

const useStyles = makeStyles(theme => ({
  divider: {
    marginBottom: theme.spacing(2)
  },
  bold: {
    fontWeight: 500
  },
  highlight: {
    color: theme.palette.primary.main
  }
}))

const ApplicationStepSixModule: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const { activeSnackBar } = useGlobalContext()
  const { finalizeApplication } = useApplicationStateContext()

  const onSubmit = useCallback(
    async event => {
      event.preventDefault()
      try {
        await finalizeApplication()
        history.push(`/application/finish`)
      } catch (error) {
        activeSnackBar({
          type: "error",
          message: (error as AxiosError).response?.data.message
        })
      }
    },
    [finalizeApplication, history, activeSnackBar]
  )

  return (
    <ApplicationStepModule>
      {({ buttonBar }) => (
        <form onSubmit={onSubmit}>
          <CardComponent maxWidth="lg">
            <Typography variant="h5" align="center" className={classes.bold}>
              ยืนยันการสมัคร
            </Typography>

            <Divider className={classes.divider} />

            <Typography variant="body1">
              หลังจากน้อง ๆ ได้กดยืนยันการสมัครแล้วน้อง ๆ จะ <span className={classes.highlight}>ไม่สามารถ</span> กลับไปแก้ไขข้อมูลใด ๆ ได้อีก
              กรุณาเช็คความถูกต้องของข้อมูลก่อน <span className={classes.highlight}>ยืนยันการสมัคร</span>
            </Typography>

            {buttonBar}
          </CardComponent>
        </form>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepSixModule
