import React from "react"
import { Typography, Button, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

import landing1 from "../../assets/images/background/landing-1.png"
import { safeArea } from "../../core/components/safeArea.component"
import { grey } from "@material-ui/core/colors"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { ApplicationStatus, useAnnounceContext } from "../../core/providers/announce.provider"
import { useAuthContext } from "../../core/providers/auth.provider"

const useStyle = makeStyles(theme => ({
  titleContainer: {
    minHeight: "542px",
    backgroundImage: `url(${landing1})`,

    color: "white",
    backgroundSize: "cover"
  },
  title: {
    margin: "auto",
    fontSize: "3rem",
    fontFamily: "Raleway",
    lineHeight: "3.1rem",
    fontWeight: 300,
    marginBottom: theme.spacing(4),
    "&>.big": {
      fontSize: "3.75rem"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem"
    }
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 200,
    padding: theme.spacing(0, 6)
  },
  button: {
    marginTop: theme.spacing(7),
    height: "50px",
    width: "min(353px, 90vw)",
    "&>*": {
      fontSize: "1.1rem"
    },
    "&:disabled": {
      backgroundColor: grey[400],
      color: grey[200]
    }
  },
  safeArea,
  contactsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      flexDirection: "column"
    }
  },
  contactConatiner: {
    color: theme.palette.gray[400],
    marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(1)
    },
    "&::after": {
      content: "none"
    }
  },
  icon: {
    fontSize: "28px",
    paddingRight: theme.spacing(2)
  }
}))

const HomeTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  const classes = useStyle()
  const { isLoggedIn, me } = useAuthContext()
  const { state } = useAnnounceContext()

  const getButtonLabel = () => {
    if (isLoggedIn) {
      if (me.data?.applicationState === "NOT_FILLED" || me.data?.applicationState === "DRAFT") {
        return "สมัครต่อจากครั้งที่แล้ว"
      }
      return "ตรวจสอบเอกสาร"
    }
    if (state === ApplicationStatus.LATE) return "หมดเขตรับสมัคร"
    if (state === ApplicationStatus.EARLY) return "เปิดรับสมัครวันที่ 15 พฤศจิกายน"
    return "สมัครเลย! วันนี้ - 15 ธันวาคม 2564"
  }

  const notAllow = state === ApplicationStatus.LATE || state === ApplicationStatus.EARLY

  return (
    <div className={classes.titleContainer}>
      <Box className={classes.safeArea} display="flex" justifyContent="center" alignItems="center" height="100%" minHeight="542px">
        <Box textAlign="center" display="flex" flexDirection="column">
          <Typography className={classes.title}>
            <span className="big">L</span>ARNGEAR CAMP 21st
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            ค้นหาความเป็นวิศวกร ด้วยมือของคุณเอง
          </Typography>
          <Link to="/profile" className="no-underline" style={{ pointerEvents: notAllow ? "none" : "initial" }}>
            <Button variant="contained" color="primary" className={classes.button} disabled={notAllow}>
              {getButtonLabel()}
            </Button>
          </Link>
          <div className={classes.contactsContainer}>
            <a href="https://www.facebook.com/LARNGEARCAMP" target="_blank" rel="noopener noreferrer" className={classes.contactConatiner}>
              <BsFacebook className={classes.icon} />
              <Typography variant="h6">LarnGear Camp</Typography>
            </a>
            <a href="https://www.instagram.com/larngear_camp/" target="_blank" rel="noopener noreferrer" className={classes.contactConatiner}>
              <BsInstagram className={classes.icon} />
              <Typography variant="h6">larngear_camp</Typography>
            </a>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default HomeTitle
