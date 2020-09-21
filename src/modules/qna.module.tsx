import { Typography, Container } from "@material-ui/core"
import React from "react"
import { CardComponent } from "../core/components/card.component"
import { qandAConstant } from "../core/constants/qna.constant"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3)
  },
  footer: {
    marginBottom: theme.spacing(12)
  }
}))

const QandAModule = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="right">
        คำถามที่พบบ่อย
      </Typography>
      <Typography variant="h1" align="right">
        FAQ
      </Typography>
      {qandAConstant.map((content, index) => (
        <CardComponent maxWidth="lg" key={index + content.title} className={classes.paper}>
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
  )
}

export { QandAModule }
