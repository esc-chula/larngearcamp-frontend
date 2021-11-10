import React from "react"
import { Typography, Avatar, useTheme, useMediaQuery, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import { HomeContainerProps } from "./home-container.module"

import { QualificationModel } from "../../core/constants/qualifications.constant"
import { ITheme } from "../../styles/types"

const useStyle = makeStyles((theme: ITheme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.gray[700],
    backgroundColor: theme.palette.gray[50],
    padding: `${theme.spacing(9)}px min(${theme.spacing(9)}px, 5vw)`,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(3)
    }
  },
  qualificationContainer: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1020px",
    gap: `${theme.spacing(6)}px`,
    [theme.breakpoints.down("md")]: {
      gap: `${theme.spacing(2)}px`
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3)
    }
  }
}))

const HomeQualification: React.FC<{ qualifications: QualificationModel[] } & HomeContainerProps> = props => {
  const classes = useStyle()

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h1">
        คุณสมบัติผู้สมัคร
      </Typography>
      <div className={classes.qualificationContainer}>
        {props.qualifications.map(qualification => (
          <QualificationItem qualification={qualification} />
        ))}
      </div>
    </div>
  )
}

const useStyleItem = makeStyles(theme => ({
  container: {
    display: "flex",
    columnGap: `${theme.spacing(2)}px`,
    backgroundColor: "white",
    boxShadow: "0px 100px 257px 0px #00000012",
    maxWidth: "486px",
    width: "calc(50% - 24px)",
    borderRadius: "10px",
    padding: theme.spacing(4),
    boxSizing: "border-box",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      width: "100%",
      padding: theme.spacing(2)
    },
    "&:last-child": {
      maxWidth: "1020px",
      width: "100%"
    }
  },
  description: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(30),
    fontWeight: 300,
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(25)
    }
  },
  logoImg: {
    width: "80px",
    height: "80px",
    justifySelf: "center"
  },
  line: {
    lineHeight: "0px"
  }
}))
const QualificationItem = React.forwardRef<HTMLDivElement, { qualification: QualificationModel }>((props, ref) => {
  const theme = useTheme()
  const isSmall = useMediaQuery<Theme>(theme.breakpoints.down("sm"))
  const classes = useStyleItem()

  let description = props.qualification.description
  if (isSmall) {
    description = description.replaceAll("\t", "\n")
  }

  return (
    <div ref={ref} className={classes.container}>
      <Avatar src={props.qualification.src} className={classes.logoImg}></Avatar>
      <Typography align="left" className={classes.description}>
        {description.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            <span className={classes.line}>{line}</span>
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </div>
  )
})

export default HomeQualification
