import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Container, Grid } from "@material-ui/core"
import { useForm, FormProvider } from "react-hook-form"
import { questionsSection1Constant } from "../../core/constants/questionsSection1.constant"
import { QuestionCardComponent } from "../../core/components/questionCard"
import QuestionModel from "../../core/models/question.model"
import { MultilineTypeComponent } from "../../core/components/questionType/multiline.component"
import { RadioTypeComponent } from "../../core/components/questionType/radio.component"
import { CheckboxTypeComponent } from "../../core/components/questionType/checkbox.component"
import { RankingTypeComponent } from "../../core/components/questionType/ranking.component"

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  question: {
    "&>*": {
      marginBottom: theme.spacing(2)
    }
  },
  bold: {
    fontWeight: 500
  },
  buttonSuccess: {
    marginTop: theme.spacing(2),
    color: "white",
    background: theme.palette.success.main,
    "&:hover": {
      background: theme.palette.success.dark
    }
  },
  buttonWarning: {
    marginTop: theme.spacing(2),
    color: "white",
    background: theme.palette.warning.main,
    "&:hover": {
      background: theme.palette.warning.dark
    }
  },
  paper: {
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  mutiline: {
    marginTop: theme.spacing(3),
    "&>*": {
      minHeight: 80,
      display: "flex",
      alignItems: "flex-start"
    }
  },
  input: {
    marginTop: theme.spacing(2)
  }
}))

const ApplicationStepThreeModule = () => {
  const methods = useForm()
  const { handleSubmit } = methods
  const classes = useStyles()
  const history = useHistory()
  const onSubmit = useCallback(() => {}, [])
  const nextPage = useCallback(
    (path: string) => () => {
      history.push(path)
    },
    [history]
  )
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container maxWidth="lg">
            <div className={classes.question}>
              {questionsSection1Constant.map((question: QuestionModel, index) => (
                <QuestionCardComponent
                  key={index + 1}
                  question={`${index + 1}. ${question.question}`}
                  caption={question.caption}
                  imagePath={question.imagePath}>
                  {question.type === "multiline" && <MultilineTypeComponent name={`question${index}`} className={classes.input} />}
                  {question.type === "checkbox" && <CheckboxTypeComponent name={`question${index}`} contents={question.contents} />}
                  {question.type === "radio" && (
                    <RadioTypeComponent name={`question${index}`} contents={question.contents} className={classes.input} />
                  )}
                  {question.type === "ranking" && <RankingTypeComponent name={`question${index}`} contents={question.contents} />}
                </QuestionCardComponent>
              ))}
            </div>

            <Grid container spacing={2}>
              <Grid xs={6} item>
                <Button onClick={nextPage("/application/step2")} variant="contained" className={classes.buttonWarning} fullWidth>
                  ย้อนกลับ
                </Button>
              </Grid>
              <Grid xs={6} item>
                <Button onClick={nextPage("/application/step4")} variant="contained" className={classes.buttonSuccess} fullWidth>
                  ไปขั้นตอนถัดไป
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      </FormProvider>
    </>
  )
}

export default ApplicationStepThreeModule
