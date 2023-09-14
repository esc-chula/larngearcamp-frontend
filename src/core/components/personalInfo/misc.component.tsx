import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SelectComponent } from "../select.component"
import { TextFieldComponent } from "../textField.component"
import { interviewAvailabilityConstant } from "../../constants/interviewAvailability.constant"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 500
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  subtitle: {
    marginBottom: theme.spacing(0.5)
  }
}))

const PersonalMiscComponent = () => {
  const { control } = useFormContext()
  const classes = useStyles()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          คำถามเพิ่มเติม
        </Typography>
        <Typography variant="body2" className={`${classes.subtitle}`}>
          หากน้องผ่านการคัดเลือก น้องสะดวกมาสัมภาษณ์วันที่ 21 ตุลาคม 256 ที่คณะวิศวฯ จุฬาฯ หรือไม่?
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={4}>
            <SelectComponent control={control} data={interviewAvailabilityConstant} />
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <TextFieldComponent name="misc.unavailableReason" label="โปรดระบุสาเหตุ หากไม่สะดวก" type="text" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalMiscComponent }
