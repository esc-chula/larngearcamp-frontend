import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { FormProvider } from "react-hook-form"
import { questionsSection2Constant } from "../../core/constants/questionsSection2.constant"
import { QuestionCardComponent } from "../../core/components/questionCard"
import QuestionModel from "../../core/models/question.model"
import { MultilineTypeComponent } from "../../core/components/questionType/multiline.component"
import { RadioTypeComponent } from "../../core/components/questionType/radio.component"
import { CheckboxTypeComponent } from "../../core/components/questionType/checkbox.component"
import { RankingTypeComponent } from "../../core/components/questionType/ranking.component"
import ApplicationStepModule from "./stepLayout.module"
import { yupResolver } from "@hookform/resolvers"
import { Answer2Model } from "../../schemas/answer2.schema"
import Answer2Schema from "../../schemas/answer2.schema"
import { convertAnswer2SchemaToAnswer2DTO } from "../../utils/modify"
import { useApplicationForm, useApplicationStateContext } from "../../core/providers/applicationState.provider"
import { useNextStep } from "./stepRouter.module"

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

const ApplicationStepFourModule: React.FC = () => {
  const methods = useApplicationForm<Answer2Model>({
    reValidateMode: "onBlur",
    resolver: yupResolver(Answer2Schema)
  })
  const { updateApplication } = useApplicationStateContext()
  const { handleSubmit } = methods
  const classes = useStyles()
  const nextStep = useNextStep()
  const onSubmit = useCallback(
    async data => {
      const values = convertAnswer2SchemaToAnswer2DTO(data)
      try {
        await updateApplication(values)
        nextStep()
      } catch (error) {
        // show modal
      }
    },
    [updateApplication, nextStep]
  )
  return (
    <ApplicationStepModule>
      {({ ButtonBar }) => (
        <>
          <FormProvider {...methods}>
            <form className={classes.question} onSubmit={handleSubmit(onSubmit)}>
              {questionsSection2Constant.map((question: QuestionModel, index) => (
                <QuestionCardComponent
                  key={`secondPart.${index + 1}`}
                  question={`${index + 1}. ${question.question}`}
                  caption={question.caption}
                  imagePath={question.imagePath}>
                  {question.type === "multiline" && <MultilineTypeComponent name={`answer${index + 1}`} wordCount={question.wordCount} />}
                  {question.type === "checkbox" && <CheckboxTypeComponent name={`answer${index + 1}`} contents={question.contents} />}
                  {question.type === "radio" && (
                    <RadioTypeComponent name={`answer${index + 1}`} contents={question.contents} className={classes.input} />
                  )}
                  {question.type === "ranking" && <RankingTypeComponent name={`answer${index + 1}`} contents={question.contents} />}
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

export default ApplicationStepFourModule
