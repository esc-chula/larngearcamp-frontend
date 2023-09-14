import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SelectComponent } from "../select.component"
import { relationsConstant } from "../../constants/relation.constant"
import { TextFieldComponent } from "../textField.component"
import { NumberTextFieldComponent } from "../numberTextField.component"
import { interviewAvailabilityConstant } from "../../constants/interviewAvailability.constant"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 500
  },
  title: {
    marginBottom: theme.spacing(2)
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
        <Typography variant="body2" className={`${classes.title}`}>
          หากผ่านการคัดเลือก น้องสะดวกมาสัมภาษณ์ที่คณะวิศวฯ จุฬาฯ วันที่ 21 ตุลาคม 2566 หรือไม่?
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <SelectComponent control={control} data={interviewAvailabilityConstant} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldComponent name="misc.unavailableReason" label="โปรดระบุสาเหตุ หากไม่สะดวก" type="text" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalMiscComponent }
