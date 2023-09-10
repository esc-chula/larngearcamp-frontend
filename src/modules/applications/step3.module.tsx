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
import { FormNavigatePrompt } from "../../core/components/formNavigatePrompt.component"
import { useGlobalContext } from "../../core/providers/global.provider"
import { AxiosError } from "axios"
import { Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  question: {
    background: theme.palette.gray[0],
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    "&>:not(:last-child)": {
      marginBottom: theme.spacing(6)
    }
  },
  input: {
    marginTop: theme.spacing(2)
  },
  aLink: {
    "& a": {
      display: "inline-block"
    }
  }
}))

function mapApplicationToAnswer1(application: ApplicationDTO): Answer1Model {
  return {
    firstPart: {
      answer1: application.answerA1 || "",
      answer2: {
        first: (application.answerA2_1 || "").toString(),
        second: (application.answerA2_2 || "").toString(),
        third: (application.answerA2_3 || "").toString(),
        fourth: (application.answerA2_4 || "").toString(),
        fifth: (application.answerA2_5 || "").toString()
      },
      answer3: application.answerA3 || "",
      answer4: application.answerA4 || "",
      answer5: {
        first: application.answerA5_1 || false,
        second: application.answerA5_2 || false,
        third: {
          text: application.answerA5_3 || "",
          checked: !!application.answerA5_3
        },
        fourth: application.answerA5_4 || false,
        fifth: application.answerA5_5 || false,
        sixth: application.answerA5_6 || false,
        seventh: application.answerA5_7 || false,
        eightth: {
          text: application.answerA5_8 || "",
          checked: !!application.answerA5_8
        }
      },
      answer6: application.answerA6,
      answer7: application.answerA7 || "",
      answer8: application.answerA8 || "",
      answer9: application.answerA9 || ""
    }
  }
}

const ApplicationStepThreeModule: React.FC = () => {
  const methods = useApplicationForm<Answer1Model>(mapApplicationToAnswer1, {
    resolver: yupResolver(Answer1Schema)
  })
  const { updateApplication } = useApplicationStateContext()
  const classes = useStyles()
  const { activeSnackBar } = useGlobalContext()
  const onSubmit = useCallback(
    async data => {
      const values = convertAnswer1SchemaToAnswer1DTO(data)
      try {
        await updateApplication(values)
        return true
      } catch (error) {
        activeSnackBar({
          type: "error",
          message: (error as AxiosError).response?.data.message
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
              {questionsSection1Constant.map((question: QuestionModel, index) => (
                <QuestionCardComponent
                  key={index + 1}
                  question={`${index + 1}. ${question.question}`}
                  caption={question.caption}
                  imagePath={question.imagePath}>
                  {question.type === "multiline" && <MultilineTypeComponent name={`firstPart.answer${index + 1}`} className={classes.aLink} />}
                  {question.type === "checkbox" && <CheckboxTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} />}
                  {question.type === "radio" && (
                    <RadioTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} className={classes.input} />
                  )}
                  {question.type === "ranking" && <RankingTypeComponent name={`firstPart.answer${index + 1}`} contents={question.contents} />}
                </QuestionCardComponent>
              ))}
              <Box mt={6}>{buttonBar}</Box>
            </form>
          </FormProvider>
        </>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepThreeModule
