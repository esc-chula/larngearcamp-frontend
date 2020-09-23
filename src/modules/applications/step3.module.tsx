import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useForm, FormProvider } from "react-hook-form"
import { questionsSection1Constant } from "../../core/constants/questionsSection1.constant"
import { QuestionCardComponent } from "../../core/components/questionCard"
import QuestionModel from "../../core/models/question.model"
import { MultilineTypeComponent } from "../../core/components/questionType/multiline.component"
import { RadioTypeComponent } from "../../core/components/questionType/radio.component"
import { CheckboxTypeComponent } from "../../core/components/questionType/checkbox.component"
import { RankingTypeComponent } from "../../core/components/questionType/ranking.component"
import ApplicationStepModule from "./stepLayout.module"
import { yupResolver } from "@hookform/resolvers"
import AnswerSchema from "../../schemas/answer.schema"

const useStyles = makeStyles(theme => ({
  question: {
    "&>*": {
      marginBottom: theme.spacing(2)
    }
  },
  input: {
    marginTop: theme.spacing(2)
  }
}))

const ApplicationStepThreeModule: React.FC<{ step: string }> = ({ step }) => {
  const methods = useForm({
    resolver: yupResolver(AnswerSchema)
  })
  const { handleSubmit } = methods
  const classes = useStyles()
  const onSubmit = useCallback(() => {
    console.log("Success")
  }, [])
  return (
    <ApplicationStepModule>
      {({ ButtonBar }) => (
        <>
          <FormProvider {...methods}>
            <form className={classes.question} onSubmit={handleSubmit(onSubmit)}>
              {questionsSection1Constant.map((question: QuestionModel, index) => (
                <QuestionCardComponent
                  key={index + 1}
                  question={`${index + 1}. ${question.question}`}
                  caption={question.caption}
                  imagePath={question.imagePath}>
                  {question.type === "multiline" && <MultilineTypeComponent name={`firstPart.answer${index + 1}`} wordCount={question.wordCount} />}
                  {question.type === "checkbox" && <CheckboxTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} />}
                  {question.type === "radio" && (
                    <RadioTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} className={classes.input} />
                  )}
                  {question.type === "ranking" && <RankingTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} />}
                </QuestionCardComponent>
              ))}
              <ButtonBar />
            </form>
          </FormProvider>
        </>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepThreeModule
