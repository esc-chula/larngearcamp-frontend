import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { FormProvider } from "react-hook-form"
import { questionsSection1Constant } from "../../core/constants/questionsSection1.constant"
import { QuestionCardComponent } from "../../core/components/questionCard"
import QuestionModel from "../../core/models/question.model"
import { MultilineTypeComponent } from "../../core/components/questionType/multiline.component"
import { RadioTypeComponent } from "../../core/components/questionType/radio.component"
import { CheckboxTypeComponent } from "../../core/components/questionType/checkbox.component"
import { RankingTypeComponent } from "../../core/components/questionType/ranking.component"
import ApplicationStepModule, { useHandleSubmit } from "./stepLayout.module"
import { yupResolver } from "@hookform/resolvers"
import { Answer1Model } from "../../schemas/answer1.schema"
import Answer1Schema from "../../schemas/answer1.schema"
import { convertAnswer1SchemaToAnswer1DTO } from "../../utils/modify"
import { useApplicationStateContext, useApplicationForm } from "../../core/providers/applicationState.provider"
import { ApplicationDTO } from "../../core/models/dto/application.dto"

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

function mapApplicationToAnswer1(application: ApplicationDTO): Answer1Model {
  const {
    answer4: { fifth: answer4fifth, sixth: answer4sixth, ...answer4Rest },
    ...firstPartRest
  } = application.answer?.firstPart || { answer4: {} }
  return {
    firstPart: {
      ...firstPartRest,
      answer4: {
        ...answer4Rest,
        fifth: {
          text: answer4fifth ? answer4fifth : "",
          checked: !!answer4fifth
        },
        sixth: {
          text: answer4sixth ? answer4sixth : "",
          checked: !!answer4sixth
        }
      },
      answer6: firstPartRest.answer6 ? `${firstPartRest.answer6}` : ""
    }
  }
}

const ApplicationStepThreeModule: React.FC = () => {
  const methods = useApplicationForm<Answer1Model>(mapApplicationToAnswer1, {
    reValidateMode: "onBlur",
    resolver: yupResolver(Answer1Schema)
  })
  const { updateApplication } = useApplicationStateContext()
  const classes = useStyles()
  const onSubmit = useCallback(
    async data => {
      const values = convertAnswer1SchemaToAnswer1DTO(data)
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
  const { getValues, errors } = methods
  const handleSubmit = useHandleSubmit(methods, onSubmit)
  return (
    <ApplicationStepModule beforeNavigate={handleSubmit}>
      {({ buttonBar }) => (
        <>
          <FormProvider {...methods}>
            <form className={classes.question} onSubmit={handleSubmit}>
              {questionsSection1Constant.map((question: QuestionModel, index) => (
                <QuestionCardComponent
                  key={index + 1}
                  question={`${index + 1}. ${question.question}`}
                  caption={question.caption}
                  imagePath={question.imagePath}>
                  {question.type === "multiline" && <MultilineTypeComponent name={`firstPart.answer${index + 1}`} />}
                  {question.type === "checkbox" && <CheckboxTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} />}
                  {question.type === "radio" && (
                    <RadioTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} className={classes.input} />
                  )}
                  {question.type === "ranking" && <RankingTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} />}
                </QuestionCardComponent>
              ))}
              <button onClick={() => console.log(getValues(), errors)}>check value </button>
              {buttonBar}
            </form>
          </FormProvider>
        </>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepThreeModule
