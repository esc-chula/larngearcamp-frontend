import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Divider, Typography } from "@material-ui/core"
import { CardComponent } from "../../core/components/card.component"
import ApplicationStepModule from "./stepLayout.module"
import { FormProvider, useForm } from "react-hook-form"
import { uploadFileConstant } from "../../core/constants/uploadFile.constant"
import UploadBlockComponent from "../../core/components/uploadBlock.component"
import { yupResolver } from "@hookform/resolvers"
import DocumentSchema from "../../schemas/document.schema"
import { DocumentModel } from "../../schemas/document.schema"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  divider: {
    marginBottom: theme.spacing(2)
  },
  bold: {
    fontWeight: 500
  },
  withIcon: {
    display: "flex",
    "&>*:first-child": {
      marginRight: theme.spacing(1)
    }
  },
  upload: {
    marginTop: theme.spacing(2),
    maxWidth: 150
  }
}))

const ApplicationStepFiveModule: React.FC<{ step: string }> = ({ step }) => {
  const classes = useStyles()
  const history = useHistory()
  const methods = useForm<DocumentModel>({
    resolver: yupResolver(DocumentSchema)
  })
  const { handleSubmit } = methods
  const onSubmit = useCallback(() => history.push(`/application/step/${parseInt(step) + 1}`), [history, step])

  return (
    <ApplicationStepModule>
      {({ ButtonBar }) => (
        <CardComponent maxWidth="lg">
          <Typography variant="h5" align="center" className={classes.bold}>
            อัพโหลดเอกสารประกอบการรับสมัคร
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {uploadFileConstant.map((content, index) => (
                <React.Fragment key={index}>
                  <Divider className={classes.divider} />
                  <UploadBlockComponent {...content} order={index + 1} />
                </React.Fragment>
              ))}
              <ButtonBar />
            </form>
          </FormProvider>
        </CardComponent>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepFiveModule
