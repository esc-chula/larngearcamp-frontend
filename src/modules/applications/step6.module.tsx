import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Divider, Typography } from "@material-ui/core"
import { CardComponent } from "../../core/components/card.component"
import ApplicationStepModule from "./stepLayout.module"

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

const ApplicationStepSixModule = () => {
  const classes = useStyles()
  return (
    <ApplicationStepModule>
      {({ buttonBar }) => (
        <CardComponent maxWidth="lg">
          <Typography variant="h5" align="center" className={classes.bold}>
            อัพโหลดเอกสารประกอบการรับสมัคร
          </Typography>

          <Divider className={classes.divider} />

          <Typography variant="body1">
            หลังจากน้อง ๆ ได้กดยืนยันการสมัครแล้วน้อง ๆ จะ <span className={classes.highlight}>ไม่สามารถ</span> กลับไปแก้ไขคำตอบของ
            คำถามทั้งสองส่วนและ เอกสารที่แนบได้อีก โดยน้อง ๆ สามารถกลับไปตรวจสอบคำตอบ และเอกสารต่าง ๆ ได้
            <span className={classes.highlight}>ผ่านการกดหมายเลขขั้นตอนที่แถบทางด้านบน</span>
          </Typography>

          {buttonBar}
        </CardComponent>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepSixModule
