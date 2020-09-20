import React from "react"
import { CardComponent } from "../../core/components/card.component"
import { Box, Button, Divider, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(4)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  bold: {
    fontWeight: 500
  },
  button: {
    marginTop: theme.spacing(2),
    color: "white",
    background: theme.palette.success.main,
    "&:hover": {
      background: theme.palette.success.dark
    }
  }
}))

const datas = [
  {
    title: "เอกสารที่จำเป็นต้องดาวน์โหลดไปใช้",
    contents: ["ใบตอบรับผู้ปกครองค่ายลานเกียร์ครั้งที่ 20"]
  },
  {
    title: "เอกสารที่ต้องแนบเพิ่มเติม",
    contents: [
      "รูปถ่ายหน้าตรง เห็นหน้าชัดเจน เช่นรูปติดบัตร (.jpg / .png)",
      "ใบตอบรับผู้ปกครอง ค่ายลานเกียร์ ครั้งที่ 20 (.pdf / .jpg / .png)",
      "ใบ ปพ. 1 หรือ 7 หรือ หลักฐานยืนยันตัวตนอื่นๆ (.pdf / .jpg / .png)"
    ]
  },
  {
    title: "ขั้นตอนการสมัคร",
    contents: [
      "กรอกข้อมูลส่วนตัว การศึกษา สุขภาพ และช่องทางการติดต่อ",
      "ตอบคำถามที่พี่ ๆ เตรียมไว้ให้",
      "อัพโหลดเอกสารดังที่กล่าวไว้ข้างต้น",
      "ยืนยันการสมัคร"
    ]
  }
]

const ApplicationStepOneModule = () => {
  const classes = useStyles()

  return (
    <CardComponent maxWidth="lg" className={classes.card}>
      <Typography variant="h5" align="center" className={classes.bold}>
        รายละเอียดของการสมัครค่ายลานเกียร์ครั้งที่ 20
      </Typography>
      <Divider className={classes.divider} />
      {datas.map((data, index) => (
        <Box mt={3} key={index + 1}>
          <Typography variant="subtitle1">{`${index + 1} ${data.title}`}</Typography>
          {data.contents.map((content, innerIndex) => (
            <Box pl={2} mt={1} key={index + "-" + innerIndex}>
              <Typography variant="body2">{`${index + 1}.${innerIndex + 1} ${content}`}</Typography>
            </Box>
          ))}
        </Box>
      ))}
      <Box mt={2}>
        <Typography variant="body1" color="error" className={classes.bold}>
          หมายเหตุ
        </Typography>
        <Typography variant="body2" color="error">
          น้อง ๆ สามารถกดตัวเลขที่แถบด้านบนเพื่อกลับไปแก้ไขสิ่งที่น้องกรอกไปแล้วได้ เช่น เมื่อน้องกรอกข้อมูsลไปถึงขั้นตอนที่ 3 แล้ว
          น้องสามารถกดที่หมายเลข 2 เพื่อย้อนกลับมา แก้ไขข้อมูลในส่วนที่ 2 ได้
        </Typography>
      </Box>
      <Link className="no-underline" to="/application/step/2">
        <Button variant="contained" className={classes.button} fullWidth>
          ไปขั้นตอนถัดไป
        </Button>
      </Link>
    </CardComponent>
  )
}

export default ApplicationStepOneModule
