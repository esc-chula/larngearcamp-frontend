import { Typography, Container } from "@material-ui/core"
import React from "react"
import { CardComponent } from "../core/components/card.component"
import { qandAConstant } from "../core/constants/qna.constant"
import { makeStyles } from "@material-ui/core/styles"
import { RedWaveComponent } from "../core/components/redWave.component"
import BackgroundComponent from "../core/components/background.component"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3)
  },
  footer: {
    marginBottom: theme.spacing(12)
  },
  faq: {
    color: "#EEEEEE",
    fontSize: "120px",
    [theme.breakpoints.up("md")]: {
      fontSize: "200px"
    },
    lineHeight: "80%"
  },
  pageName: {
    color: "#EEEEEE",
    fontSize: "24px",
    fontWeight: 300,
    [theme.breakpoints.up("md")]: {
      fontSize: "40px"
    }
  },
  container: {
    margin: `${theme.spacing(6)}px 0`,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  }
}))

const QandAModule = () => {
  const classes = useStyles()
  return (
    <>
      <BackgroundComponent type="bg1" />
      <RedWaveComponent />
      <Container maxWidth="lg">
        <div className={classes.container}>
          <div>
            <Typography variant="h4" align="left" className={classes.pageName}>
              คำถามที่พบบ่อย
            </Typography>
            <Typography variant="h1" align="left" className={classes.faq}>
              FAQ
            </Typography>
          </div>
        </div>
        {qandAConstant.map((content, index) => (
          <CardComponent maxWidth="lg" key={index + content.title} className={classes.paper} elevation={2}>
            <Typography variant="h6" color="primary">
              {content.title}
            </Typography>
            {content.contents.map((data, index) => (
              <Typography variant="body2" key={index + data}>
                {data}
              </Typography>
            ))}
          </CardComponent>
        ))}
        <div className={classes.footer} />
      </Container>
    </>
  )
}

export { QandAModule }
