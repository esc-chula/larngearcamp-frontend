import React, { useCallback } from "react"
import { CardComponent } from "../../core/components/card.component"
import { Divider, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { FormProvider } from "react-hook-form"
import { PersonalProfileComponent } from "../../core/components/personalInfo/profile.component"
import { PersonalContactComponent } from "../../core/components/personalInfo/contact.component"
import { PersonalEducationComponent } from "../../core/components/personalInfo/education.component"
import { PersonalHealthComponent } from "../../core/components/personalInfo/health.component"
import { PersonalEmergencyComponent } from "../../core/components/personalInfo/emergency.component"
import { yupResolver } from "@hookform/resolvers"
import ProfileSchema, { ProfileModel } from "../../schemas/profile.schema"
import ApplicationStepModule, { useHandleSubmit } from "./stepLayout.module"
import { convertProfileSchemaToProfileDTO } from "../../utils/modify"
import { useApplicationForm, useApplicationStateContext } from "../../core/providers/applicationState.provider"
import { format } from "date-fns"
import { FormNavigatePrompt } from "../../core/components/formNavigatePrompt.component"
import { useGlobalContext } from "../../core/providers/global.provider"
import { AxiosError } from "axios"
import { ApplicationModels } from "../../core/models/application.models"
import { PersonalMiscComponent } from "../../core/components/personalInfo/misc.component"

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  question: {
    "&>*": {
      marginBottom: theme.spacing(3)
    },
    "&>*:not(:last-child)": {
      marginBottom: theme.spacing(6)
    }
  },
  bold: {
    fontWeight: 500
  }
}))

function mapApplicationToProfile(application: ApplicationModels): ProfileModel {
  const birthDateDate = new Date(application.birthDate)
  const formattedBirthDate = format(birthDateDate, "yyyy-MM-dd")

  return {
    title: application.title,
    name: application.firstName,
    surname: application.lastName,
    nickname: application.nickName,
    birthDate: formattedBirthDate,
    phoneNumber: application.phoneNumber,
    contact: {
      address: application.mailAddress,
      subDistrict: application.mailTumbol,
      district: application.mailAmphoe,
      province: application.mailProvince,
      facebookName: application.contactFacebook,
      lineId: application.contactLineApp,
      email: application.contactEmail,
      parentName: application.parentName,
      parentNumber: application.parentTelephone,
      parentRelationship: application.parentRelationship,
      phoneNumber: application.mobileTelephone,
      recipient: application.mailRecipientName,
      zip: application.mailPostalCode,
      homeNumber: application.parentTelephone
    },
    education: application.educationLevel,
    studyProgram: application.educationProgram,
    school: application.educationalInstitution,
    province: application.educationalInstitutionProvince,
    religion: application.religion,
    shirtSize: application.shirtSize,
    health: {
      allergicDrug: application.allergicDrug,
      allergicFood: application.foodRestriction,
      bloodType: application.bloodGroup,
      congenitalDisease: application.illness,
      drug: application.illnessDrug
    },
    misc: { interviewAvailability: application.interviewAvailability, unavailableReason: application.unavailableReason }
  }
}

const ApplicationStepTwoModule: React.FC = () => {
  const classes = useStyles()
  const { activeSnackBar } = useGlobalContext()
  const { updateApplication } = useApplicationStateContext()
  const methods = useApplicationForm<ProfileModel>(mapApplicationToProfile, {
    reValidateMode: "onChange",
    resolver: yupResolver(ProfileSchema)
  })

  const onSubmit = useCallback(
    async data => {
      const values = convertProfileSchemaToProfileDTO(data)
      try {
        await updateApplication(values)
        return true
      } catch (error) {
        activeSnackBar({
          type: "error",
          message: (error as AxiosError).response?.data.errors.reduce((prev: any, curr: any) => prev + " " + curr.msg, "")
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
        <FormProvider {...methods}>
          <FormNavigatePrompt />
          <form onSubmit={handleSubmit}>
            <CardComponent maxWidth="lg" className={classes.card}>
              <Typography variant="h5" align="center" className={classes.bold}>
                ข้อมูลส่วนตัว
              </Typography>
              <Divider className={classes.divider} />
              <div className={classes.question}>
                <PersonalProfileComponent />
                <PersonalEducationComponent />
                <PersonalHealthComponent />
                <PersonalContactComponent />
                <PersonalEmergencyComponent />
                <PersonalMiscComponent />
              </div>
              {buttonBar}
            </CardComponent>
          </form>
        </FormProvider>
      )}
    </ApplicationStepModule>
  )
}

export default ApplicationStepTwoModule
