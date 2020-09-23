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
import { Answer1Model } from "../../schemas/answer1.schema"
import Answer1Schema from "../../schemas/answer1.schema"
import { useApplicationContext } from "../../core/providers/application.provider"
import { convertAnswer1SchemaToAnswer1DTO } from "../../utils/modify"

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
  const methods = useForm<Answer1Model>({
    reValidateMode: "onBlur",
    resolver: yupResolver(Answer1Schema)
  })
  const { updateApplication } = useApplicationContext()
  const { handleSubmit, getValues } = methods
  const classes = useStyles()
  const onSubmit = useCallback(async () => {
    console.log("Success")
    const values = convertAnswer1SchemaToAnswer1DTO(getValues())
    try {
      await updateApplication(values)
    } catch (error) {
      // show modal
    }
  }, [updateApplication, getValues])
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

export default ApplicationStepThreeModule
