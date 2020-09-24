import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Divider, Typography } from "@material-ui/core"
import { CardComponent } from "../../core/components/card.component"
import ApplicationStepModule from "./stepLayout.module"
import { FormProvider } from "react-hook-form"
import { uploadFileConstant } from "../../core/constants/uploadFile.constant"
import UploadBlockComponent from "../../core/components/uploadBlock.component"
import { yupResolver } from "@hookform/resolvers"
import DocumentSchema from "../../schemas/document.schema"
import { DocumentModel } from "../../schemas/document.schema"
import { convertDocumentSchemaSchemaToDocumentDTO } from "../../utils/modify"
import { useApplicationForm, useApplicationStateContext } from "../../core/providers/applicationState.provider"

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
  const methods = useApplicationForm<DocumentModel>({
    resolver: yupResolver(DocumentSchema)
  })
  const { handleSubmit } = methods
  const { updateApplication } = useApplicationStateContext()

  const onSubmit = useCallback(
    async data => {
      const values = convertDocumentSchemaSchemaToDocumentDTO(data)
      try {
        await updateApplication(values)
      } catch (error) {
        // show modal
      }
    },
    [updateApplication]
  )

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
