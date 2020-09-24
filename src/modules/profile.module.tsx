import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { ProfileComponent } from "../core/components/profile.component"
import { Container, Paper, Typography, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { useApplicationContext } from "../core/providers/application.provider"
import { useLoadingCallback } from "../core/components/loading.component"

const useStyles = makeStyles(theme => ({
  button: {
    color: "white",
    marginTop: theme.spacing(6),
    padding: theme.spacing(1, 4)
  },
  warning: {
    background: theme.palette.warning.main,
    "&:hover": {
      background: theme.palette.warning.dark
    }
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(4)
  }
}))

const ProfileModule = () => {
  const classes = useStyles()
  const { createApplication } = useApplicationContext()

  const initApplication = useLoadingCallback(
    useCallback(async () => {
      try {
        await createApplication()
      } catch (error) {}
    }, [createApplication])
  )

  return (
    <Container maxWidth="lg">
      <ProfileComponent />
      <Link to="/application/step/1" onClick={initApplication} className="no-underline">
        <Button className={classes.button} color="primary" variant="contained" fullWidth>
          สมัครเข้าค่าย
        </Button>
      </Link>

      <Button className={`${classes.button} ${classes.warning}`} variant="contained" fullWidth>
        แก้ไขข้อมูลส่วนตัวผู้สมัคร (ส่วนที่ 2)
      </Button>
      <Paper elevation={2} className={classes.paper}>
        <Typography variant="h5">รอการตรวจสอบเอกสาร</Typography>
        <Typography variant="body2">
          ขณะนี้อยู่ในขั้นตอนการรอตรวจสอบเอกสารที่น้อง ๆ ได้แนบเข้ามาอยู่ ขอให้น้องเข้ามาเช็ค
          สถานะของเอกสารที่เว็บนี้เป็นประจำเผื่อในกรณีที่เอกสารที่น้องแนบมาไม่ผ่าน
        </Typography>
      </Paper>
    </Container>
  )
}

export { ProfileModule }
