import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Grid, Divider, Typography } from "@material-ui/core"
import { CardComponent } from "../../core/components/card.component"

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
  },
  highlight: {
    color: theme.palette.primary.main
  }
}))

const ApplicationStepSixModule = () => {
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
      <CardComponent maxWidth="lg">
        <Typography variant="h5" align="center" className={classes.bold}>
          อัพโหลดเอกสารประกอบการรับสมัคร
        </Typography>

        <Divider className={classes.divider} />

        <Typography variant="body1">
          หลังจากน้อง ๆ ได้กดยืนยันการสมัครแล้วน้อง ๆ จะ <span className={classes.highlight}>ไม่สามารถ</span> กลับไปแก้ไขคำตอบของ คำถามทั้งสองส่วนและ
          เอกสารที่แนบได้อีก โดยน้อง ๆ สามารถกลับไปตรวจสอบคำตอบ และเอกสารต่าง ๆ ได้
          <span className={classes.highlight}>ผ่านการกดหมายเลขขั้นตอนที่แถบทางด้านบน</span>
        </Typography>

        <Grid container spacing={2}>
          <Grid xs={12} sm={6} item>
            <Button onClick={nextPage("/application/step5")} variant="contained" className={classes.buttonWarning} fullWidth>
              กลับไปแก้ไขหน้าที่แล้ว
            </Button>
          </Grid>
          <Grid xs={12} sm={6} item>
            <Button onClick={nextPage("/application/finish")} variant="contained" className={classes.buttonSuccess} fullWidth>
              ยืนยันการสมัคร
            </Button>
          </Grid>
        </Grid>
      </CardComponent>
    </>
  )
}

export default ApplicationStepSixModule
