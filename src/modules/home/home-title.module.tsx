import React from "react"
import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import landing1 from "../../assets/images/background/landing-1.png"
import { safeArea } from "../../core/components/safeArea.component"
import { grey } from "@material-ui/core/colors"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { HomeProfileButton } from "./home-profile-button.module"
import { AnnouncementBar } from "../../core/components/announcementBar.component"
import { announcementConstant } from "../../core/constants/announcements.constant"

const useStyle = makeStyles(theme => ({
  titleContainer: {
    minHeight: `calc(100vh - 48px)`,
    backgroundImage: `url(${landing1})`,

    color: "white",
    backgroundSize: "cover",
    padding: theme.spacing(2)
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

const Announcements: React.FC = () => {
  return (
    <>
      {announcementConstant.map(({ severity, variant, content }, index) => (
        <AnnouncementBar key={index} severity={severity} variant={variant}>
          {content}
        </AnnouncementBar>
      ))}
    </>
  )
}

const HomeTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  const classes = useStyle()

  return (
    <div className={classes.titleContainer}>
      <Announcements />
      <Box className={classes.safeArea} display="flex" justifyContent="center" alignItems="center" height="100%" minHeight="542px">
        <Box textAlign="center" display="flex" flexDirection="column">
          <Typography className={classes.title}>
            <span className="big">L</span>ARNGEAR CAMP 22st
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            ค้นหาความเป็นวิศวกร ด้วยมือของคุณเอง
          </Typography>
          <HomeProfileButton className={classes.button} />
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
