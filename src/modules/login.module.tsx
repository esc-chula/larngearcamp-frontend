import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import { LogoComponent } from "../core/components/logo.component"
import { FacebookButtonComponent } from "../core/components/facebookButton.component"
import { CardComponent } from "../core/components/card.component"
import BackgroundComponent from "../core/components/background.component"
import { GoogleButtonComponent } from "../core/components/googleButton.component"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(3)
    }
  },
  clearMargin: {
    margin: 0
  },
  checkbox: {
    "& > *": {
      color: grey[500]
    }
  },
  divider: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: grey[500],
    margin: theme.spacing(1, 0, 4, 0),
    "&:before, &:after": {
      flex: 1,
      content: "''",
      borderBottom: "2px solid #e0e0e0"
    },
    "&:before": {
      marginRight: "1em"
    },
    "&:after": {
      marginLeft: "1em"
    }
  },
  rightAlign: {
    fontWeight: 500,
    marginLeft: "auto",
    color: theme.palette.primary.main,
    "&:after": {
      background: theme.palette.primary.main
    }
  },
  redBg: {
    "&:after": {
      backgroundColor: theme.palette.primary.main
    }
  },
  registerPaper: {
    borderRadius: "10px"
  },
  rootContainer: {
    height: "calc(100vh - 80px)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  text: {
    display: "inline",
    fontSize: "14px",
    color: "white",
    overflow: "hidden",
    userSelect: "none",
    textAlign: "center",
    marginTop: theme.spacing(2)
  }
}))

const LoginModule = () => {
  const classes = useStyles()
  return (
    <div className={classes.rootContainer}>
      <BackgroundComponent type="bg1" />
      <LogoComponent />
      <CardComponent maxWidth="sm" padding={4} keepPadding>
        {/* <FacebookButtonComponent variant="contained" color="primary"></FacebookButtonComponent> */}
        <GoogleButtonComponent variant="contained" color="primary"></GoogleButtonComponent>
      </CardComponent>
      <span className={classes.text}>(ไม่แนะนำให้เข้าสู่ระบบด้วยบัญชี Google หากเข้าเว็บนี้ผ่าน Facebook)</span>
    </div>
  )
}

export { LoginModule }
