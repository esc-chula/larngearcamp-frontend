import React from "react"
import { Link } from "react-router-dom"
import { Card, Container, Typography, Button, makeStyles } from "@material-ui/core"
import { ProfileStatus } from "../../models/profileStatus.model"
import Gear from "../../../assets/images/icon/gear-icon.svg"
import { ApplicationStatus, useAnnounceContext } from "../../providers/announce.provider"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    top: "15vh",
    [theme.breakpoints.down("sm")]: {
      top: theme.spacing(4)
    }
  },
  card: {
    position: "relative",
    padding: theme.spacing(5, 12),
    borderRadius: "10px",
    boxShadow: "0px 100px 257px rgba(0, 0, 0, 0.07), 0px 18.576px 34.4894px rgba(0, 0, 0, 0.0269069)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 3)
    }
  },
  headingText: {
    paddingTop: theme.spacing(4),
    textAlign: "center",
    color: "#262626" //theme.palette.gray[800]
  },
  bodyText: {
    padding: theme.spacing(4, 0),
    textAlign: "center",
    color: "#8C8C8C" //theme.palette.gray[300]
  },
  button: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1, 4),
    borderRadius: "10px",
    width: "297px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  solid: {
    color: "white",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark
    }
  },
  outlined: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  },
  gear1: {
    width: "25%",
    position: "absolute",
    top: "-70px",
    left: "-70px",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      top: "-55px",
      left: "-55px"
    }
  },
  gear2: {
    width: "25%",
    position: "absolute",
    bottom: "-70px",
    right: "-70px",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      bottom: "-55px",
      right: "-55px"
    }
  }
}))

interface RegisterCardProps {
  profileStatus: ProfileStatus
}

const RegisterCard: React.FC<RegisterCardProps> = props => {
  const classes = useStyles()
  const { state } = useAnnounceContext()

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h1" className={classes.headingText}>
          Larngear Camp 21st
        </Typography>
        <Typography variant="body1" className={classes.bodyText}>
          ดูเหมือนว่าคุณจะยังไม่ได้ส่งใบสมัครเข้าค่ายลานเกียร์ครั้งที่ 21 นะ คลิกสมัครเข้าค่าย
          เพื่อมาเป็นส่วนหนึ่งในความสนุกที่ไม่สามารถหาจากที่อื่นได้อีก!
        </Typography>
        {props.profileStatus === ProfileStatus.start && state === ApplicationStatus.APPLICABLE && (
          <Link to="/application" className="no-underline">
            <Button variant="contained" disableElevation className={`${classes.button} ${classes.solid}`}>
              สมัครเข้าค่าย
            </Button>
          </Link>
        )}
        {props.profileStatus === ProfileStatus.draft && state === ApplicationStatus.APPLICABLE && (
          <Link to="/application" className="no-underline">
            <Button variant="outlined" disableElevation className={`${classes.button} ${classes.outlined}`}>
              สมัครต่อจากครั้งที่แล้ว
            </Button>
          </Link>
        )}
        {state === ApplicationStatus.LATE ||
          (state === ApplicationStatus.DOCUMENT_EDIT && (
            <Button variant="contained" disableElevation disabled={true} className={`${classes.button} ${classes.solid}`}>
              หมดเขตรับสมัคร
            </Button>
          ))}
        {state === ApplicationStatus.EARLY && (
          <Button variant="contained" disableElevation disabled={true} className={`${classes.button} ${classes.solid}`}>
            เปิดรับสมัครวันที่ 15 พฤศจิกายน
          </Button>
        )}
        <img src={Gear} className={classes.gear1} />
        <img src={Gear} className={classes.gear2} />
      </Card>
      <Typography variant="body2" className={classes.bodyText}>
        * คุณไม่จำเป็นที่จะต้องลงทะเบียนให้เสร็จในครั้งเดียว เพราะระบบจะคอยบันทึกข้อมูลให้คุณเอง
      </Typography>
    </Container>
  )
}

export default RegisterCard
