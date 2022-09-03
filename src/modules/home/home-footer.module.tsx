import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import facebookIcon from "../../assets/images/icon/facebook-icon.svg"
import instagramIcon from "../../assets/images/icon/instagram-icon.svg"
import lineIcon from "../../assets/images/icon/line-icon.svg"
import { ContactModel } from "../../core/constants/contact.constant"
import { SafeArea } from "../../core/components/safeArea.component"

const FacebookIcon: React.FC<React.HTMLAttributes<HTMLImageElement>> = props => {
  return <img src={facebookIcon} alt="" {...props} />
}

const InstagramIcon: React.FC<React.HTMLAttributes<HTMLImageElement>> = props => {
  return <img src={instagramIcon} alt="" {...props} />
}
const LineIcon: React.FC<React.HTMLAttributes<HTMLImageElement>> = props => {
  return <img src={lineIcon} alt="" {...props} />
}

const useStyles = makeStyles(theme => ({
  bg: {
    background: "#4F4F4F"
  },
  container: {
    color: "#E0E0E0",
    padding: theme.spacing(6, 6),
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between"
    }
  },
  icon: {
    height: 16
  },
  larngearContainer: {
    marginTop: theme.spacing(3)
  },
  center: {
    display: "flex",
    alignItems: "center"
  },
  inline: {
    display: "flex",
    "&>*:not(:last-child)": {
      marginRight: theme.spacing(2)
    },
    marginTop: theme.spacing(1)
  },
  alignRight: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(0),
      alignItems: "flex-end"
    }
  },
  title: {
    width: "fit-content",
    fontWeight: 500,
    fontSize: "1.2rem",
    textDecoration: "underline"
  },
  link: {
    color: "#fff",
    "&:after": {
      background: "#fff"
    }
  }
}))

const HomeFooter: React.FC<{ contacts: Array<ContactModel> }> = props => {
  const classes = useStyles()

  return (
    <SafeArea className={classes.bg}>
      <div className={classes.container}>
        <div>
          <Typography variant="subtitle1" className={classes.title}>
            หากมีข้อสงสัยเพิ่มเติม สามารถติดต่อได้ที่
          </Typography>
          {props.contacts.map(({ name, lineId }) => (
            <div key={name} className={classes.inline}>
              <LineIcon className={classes.icon} />
              <Typography variant="body2">{name}</Typography>
              <Typography variant="body2">{lineId}</Typography>
            </div>
          ))}
        </div>
        <div>
          <div className={classes.alignRight}>
            <Typography variant="subtitle1" className={classes.title}>
              ติดตามข่าวสารเพิ่มเติมได้ที่
            </Typography>
            <div className={classes.inline}>
              <FacebookIcon className={classes.icon} />
              <a href="https://www.facebook.com/LARNGEARCAMP/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                LarnGear Camp
              </a>
            </div>
            <div className={classes.inline}>
              <InstagramIcon className={classes.icon} />
              <a href="https://www.instagram.com/larngear_camp/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                larngear_camp
              </a>
            </div>
          </div>
        </div>
      </div>
    </SafeArea>
  )
}

export default HomeFooter
