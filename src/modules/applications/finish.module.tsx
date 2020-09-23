import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button, Divider, Typography } from "@material-ui/core"
import { CardComponent } from "../../core/components/card.component"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

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
  },
  check: {
    fontSize: "3.5rem",
    color: theme.palette.success.main
  }
}))

const ApplicationFinishModule = () => {
  const classes = useStyles()
  return (
    <>
      <CardComponent maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <CheckCircleIcon fontSize="large" className={classes.check} />
        </Box>

        <Typography variant="h5" align="center" className={classes.bold}>
          สิ้นสุดการสมัครค่ายลานเกียร์ครั้งที่ 20
        </Typography>

        <Divider className={classes.divider} />

        <Typography variant="body1">
          ระบบได้บันทึกข้อมูลการสมัครของน้อง ๆ ไว้เรียบร้อยแล้ว โดยน้อง ๆ สามารถติดตาม
          สถานะการสมัครและแก้ไขข้อมูลส่วนตัวที่ได้กรอกไปแล้วได้ในหน้าถัดไป
        </Typography>

        <Link to="/profile">
          <Button variant="contained" className={classes.buttonSuccess} fullWidth>
            ไปหน้าตรวจสอบสถานะ
          </Button>
        </Link>
      </CardComponent>
    </>
  )
}

export default ApplicationFinishModule
