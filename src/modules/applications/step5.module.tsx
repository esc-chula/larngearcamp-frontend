import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Divider, Grid, Typography, Box } from "@material-ui/core"
import { CardComponent } from "../../core/components/card.component"
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined"

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
  withIcon: {
    display: "flex",
    "&>*:first-child": {
      marginRight: theme.spacing(1)
    }
  },
  upload: {
    marginTop: theme.spacing(2),
    maxWidth: 150
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
      <CardComponent maxWidth="lg">
        <Typography variant="h5" align="center" className={classes.bold}>
          อัพโหลดเอกสารประกอบการรับสมัคร
        </Typography>

        <Divider className={classes.divider} />

        <Box display="flex" mb={2}>
          <Typography variant="body1">1.</Typography>
          <Box ml={2}>
            <Typography variant="body1">รูปถ่ายผู้สมัคร (รูปถ่ายหน้าตรง เห็นหน้าชัดเจน เช่น รูปติดบัตร เป็นต้น)</Typography>
            <Typography variant="body2">ไฟล์รูปภาพประเภท .jpg / .png ขนาดไม่เกิน 2 MB</Typography>
            <Button variant="contained" component="label" color="primary" className={classes.upload}>
              <div className={classes.withIcon}>
                <Typography>อัพโหลด</Typography>
                <AddToPhotosOutlinedIcon fontSize="small" />
              </div>
              <input type="file" style={{ display: "none" }} />
            </Button>
          </Box>
        </Box>

        <Divider className={classes.divider} />

        <Box display="flex" mb={2}>
          <Typography variant="body1">2.</Typography>
          <Box ml={2}>
            <Typography variant="body1">หนังสือรับรองจากผู้ปกครองเพื่อเข้าร่วมค่ายลานเกียร์ครั้งที่ 20</Typography>
            <Typography variant="body2">ไฟล์รูปภาพประเภท .pdf ขนาดไม่เกิน 2 MB</Typography>
            <Button variant="contained" component="label" color="primary" className={classes.upload}>
              <div className={classes.withIcon}>
                <Typography>อัพโหลด</Typography>
                <AddToPhotosOutlinedIcon fontSize="small" />
              </div>
              <input type="file" style={{ display: "none" }} />
            </Button>
          </Box>
        </Box>

        <Divider className={classes.divider} />

        <Box display="flex" mb={4}>
          <Typography variant="body1">3.</Typography>
          <Box ml={2}>
            <Typography variant="body1">ใบ ปพ. 1 หรือ ปพ.7 หรือ เอกสารยืนยันตัวตนอื่นๆ</Typography>
            <Typography variant="body2">ไฟล์รูปภาพประเภท .pdf ขนาดไม่เกิน 2 MB</Typography>
            <Button variant="contained" component="label" color="primary" className={classes.upload}>
              <div className={classes.withIcon}>
                <Typography>อัพโหลด</Typography>
                <AddToPhotosOutlinedIcon fontSize="small" />
              </div>
              <input type="file" style={{ display: "none" }} />
            </Button>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid xs={12} sm={6} item>
            <Button onClick={nextPage("/application/step4")} variant="contained" className={classes.buttonWarning} fullWidth>
              ย้อนกลับ
            </Button>
          </Grid>
          <Grid xs={12} sm={6} item>
            <Button onClick={nextPage("/application/step6")} variant="contained" className={classes.buttonSuccess} fullWidth>
              ไปขั้นตอนถัดไป
            </Button>
          </Grid>
        </Grid>
      </CardComponent>
    </>
  )
}

export default ApplicationStepFiveModule
