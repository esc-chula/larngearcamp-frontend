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
import { ApplicationDTO } from "../../core/models/dto/application.dto"
import { FormNavigatePrompt } from "../../core/components/formNavigatePrompt.component"
import { useGlobalContext } from "../../core/providers/global.provider"

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

function mapApplicationToAnswer2(application: ApplicationDTO): Answer2Model {
  return {
    secondPart: application.answer?.secondPart
  }
}

const ApplicationStepFourModule: React.FC = () => {
  const methods = useApplicationForm<Answer2Model>(mapApplicationToAnswer2, {
    reValidateMode: "onBlur",
    resolver: yupResolver(Answer2Schema)
  })
  const { updateApplication } = useApplicationStateContext()
  const classes = useStyles()
  const { activeSnackBar } = useGlobalContext()
  const onSubmit = useCallback(
    async data => {
      const values = convertAnswer2SchemaToAnswer2DTO(data)
      try {
        await updateApplication(values)
        return true
      } catch (error) {
        activeSnackBar({
          type: "error",
          message: error.response?.data.message
        })
        return false
      }
    },
    [updateApplication, activeSnackBar]
  )
  const handleSubmit = useHandleSubmit(methods, onSubmit)
  return (
    <ApplicationStepModule beforeNavigate={handleSubmit}>
      {({ buttonBar }) => (
        <>
          <FormProvider {...methods}>
            <FormNavigatePrompt />
            <form className={classes.question} onSubmit={handleSubmit}>
              {questionsSection2Constant.map((question: QuestionModel, index) => (
                <QuestionCardComponent
                  key={`secondPart.${index + 1}`}
                  question={`${index + 1}. ${question.question}`}
                  caption={question.caption}
                  imagePath={question.imagePath}>
                  {question.type === "multiline" && <MultilineTypeComponent name={`secondPart.answer${index + 1}`} />}
                  {question.type === "checkbox" && <CheckboxTypeComponent name={`secondPart.answer${index + 1}`} contents={question.contents} />}
                  {question.type === "radio" && (
                    <RadioTypeComponent name={`secondPart.answer${index + 1}`} contents={question.contents} className={classes.input} />
                  )}
                  {question.type === "ranking" && <RankingTypeComponent name={`secondPart.answer${index + 1}`} contents={question.contents} />}
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
