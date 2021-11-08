import React, { useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Divider, Typography } from "@material-ui/core"
import { CardComponent } from "../../core/components/card.component"
import ApplicationStepModule, { useHandleSubmit } from "./stepLayout.module"
import { FormProvider } from "react-hook-form"
import { uploadFileConstant } from "../../core/constants/uploadFile.constant"
import UploadBlockComponent from "../../core/components/uploadBlock.component"
import { yupResolver } from "@hookform/resolvers"
import DocumentSchema from "../../schemas/document.schema"
import { DocumentModel } from "../../schemas/document.schema"
import { useApplicationForm, useApplicationStateContext } from "../../core/providers/applicationState.provider"
import { AllDocumentStateDetail, ApplicationDTO } from "../../core/models/dto/application.dto"
import { DocumentItem, isDefaultUrl } from "../../core/models/dto/document.dto"
import { FormNavigatePrompt } from "../../core/components/formNavigatePrompt.component"

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

function getUrl(document: DocumentItem): string {
  if (isDefaultUrl(document.url)) {
    return ""
  } else {
    return document.url
  }
}

function mapApplicationToDocument(application: ApplicationDTO): DocumentModel {
  application = ({
    picture: {
      comment: "",
      status: "PASSED",
      url: ""
    },
    transcript: {
      comment: "",
      status: "PASSED",
      url: ""
    },
    parentalConsent: {
      comment: "",
      status: "PASSED",
      url: ""
    }
  } as unknown) as ApplicationDTO
  return ({
    pictureURL: getUrl(application.photo),
    transcriptURL: getUrl(application.transcript),
    parentalConsentURL: getUrl(application.parentalConsent)
  } as Partial<DocumentModel>) as any
}

const ApplicationStepFiveModule: React.FC = () => {
  const classes = useStyles()
  const methods = useApplicationForm<DocumentModel>(mapApplicationToDocument, {
    resolver: yupResolver(DocumentSchema)
  })
  // const { application } = useApplicationStateContext()
  const onSubmit = useCallback(async () => true, [])
  const handleSubmit = useHandleSubmit(methods, onSubmit)
  // const { documentStateDetails } = application
  const documentStateDetails = ({
    picture: {
      url: ""
    },
    parentalConsent: {
      url: ""
    },
    transcript: {
      url: ""
    }
  } as unknown) as AllDocumentStateDetail

  const application = ({
    picture: {
      url: ""
    },
    parentalConsent: {
      url: ""
    },
    transcript: {
      url: ""
    }
  } as unknown) as ApplicationDTO

  return (
    <ApplicationStepModule beforeNavigate={handleSubmit}>
      {({ buttonBar }) => (
        <CardComponent maxWidth="lg">
          <Typography variant="h5" align="center" className={classes.bold}>
            อัพโหลดเอกสารประกอบการรับสมัคร
          </Typography>
          <FormProvider {...methods}>
            <FormNavigatePrompt />
            <form onSubmit={handleSubmit}>
              {uploadFileConstant.map((content, index) => (
                <React.Fragment key={index}>
                  <Divider className={classes.divider} />
                  <UploadBlockComponent
                    serverFile={application[content.name]}
                    {...content}
                    order={index + 1}
                    disabled={!!documentStateDetails[content.name]}
                  />
                  <input ref={methods.register} name={`${content.name}URL`} type="hidden" />
                </React.Fragment>
              ))}
              {buttonBar}
            </form>
          </FormProvider>
        </CardComponent>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepFiveModule
