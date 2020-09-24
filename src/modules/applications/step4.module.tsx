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
import ApplicationStepModule, { useHandleSubmit } from "./stepLayout.module"
import { yupResolver } from "@hookform/resolvers"
import { Answer2Model } from "../../schemas/answer2.schema"
import Answer2Schema from "../../schemas/answer2.schema"
import { convertAnswer2SchemaToAnswer2DTO } from "../../utils/modify"
import { useApplicationForm, useApplicationStateContext } from "../../core/providers/applicationState.provider"

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
  const classes = useStyles()
  const onSubmit = useCallback(
    async data => {
      const values = convertAnswer2SchemaToAnswer2DTO(data)
      try {
        await updateApplication(values)
        return true
      } catch (error) {
        // show modal
        return false
      }
    },
    [updateApplication]
  )
  const { getValues } = methods
  console.log(getValues())
  const handleSubmit = useHandleSubmit(methods, onSubmit)
  return (
    <ApplicationStepModule beforeNavigate={handleSubmit}>
      {({ buttonBar }) => (
        <>
          <FormProvider {...methods}>
            <form className={classes.question} onSubmit={handleSubmit}>
              {questionsSection2Constant.map((question: QuestionModel, index) => (
                <QuestionCardComponent
                  key={`secondPart.${index + 1}`}
                  question={`${index + 1}. ${question.question}`}
                  caption={question.caption}
                  imagePath={question.imagePath}>
                  {question.type === "multiline" && <MultilineTypeComponent name={`answer${index + 1}`} />}
                  {question.type === "checkbox" && <CheckboxTypeComponent name={`answer${index + 1}`} contents={question.contents} />}
                  {question.type === "radio" && (
                    <RadioTypeComponent name={`answer${index + 1}`} contents={question.contents} className={classes.input} />
                  )}
                  {question.type === "ranking" && <RankingTypeComponent name={`answer${index + 1}`} contents={question.contents} />}
                </QuestionCardComponent>
              ))}
              {buttonBar}
            </form>
          </FormProvider>
        </>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepFourModule
