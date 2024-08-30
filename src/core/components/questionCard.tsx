import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, Typography, TypographyProps } from "@material-ui/core"

interface QuestionCard {
  question: string
  questionProps?: TypographyProps
  caption?: string | null
  captionProps?: TypographyProps
  imagePath?: string | null
}

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  image: {
    margin: theme.spacing(2, 0)
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const QuestionCardComponent: React.FC<QuestionCard> = ({ question, questionProps, caption, captionProps, imagePath, children }) => {
  const classes = useStyles()
  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography variant="body1" {...questionProps} dangerouslySetInnerHTML={{ __html: question }} className={classes.title} />
      <img src={"../../assets/images/background/bg1.jpg"} alt={"jomwannatest"} />
      <img src={"../../assets/images/background/landing-2.svg"} alt={"jomwannatest2"} />
      {imagePath && <img src={imagePath} alt={question} className={classes.image} />}
      {caption && (
        <Typography variant="caption" {...captionProps}>
          {caption}
        </Typography>
      )}
      {children}
    </Paper>
  )
}

export { QuestionCardComponent }
