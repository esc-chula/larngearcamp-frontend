import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SelectComponent } from "../select.component"
import { bloodGroupsConstant } from "../../constants/bloodGroups.constant"
import { TextFieldComponent } from "../textField.component"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 500
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const PersonalHealthComponent = () => {
  const { control } = useFormContext()
  const classes = useStyles()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold}`}>
          ข้อมูลสุขภาพ
        </Typography>
        <Typography variant="body2" className={`${classes.title}`}>
          หากมีหลายข้อให้คั่นคำตอบด้วย Comma
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <SelectComponent control={control} data={bloodGroupsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextFieldComponent name="health.congenitalDisease" label="โรคประจำตัว" type="text" />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TextFieldComponent name="health.allergicFood" label="ข้อจำกัดด้านอาหาร (เช่น ฮาลาล, แพ้อาหาร)" type="text" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldComponent name="health.allergicDrug" label="ยาที่แพ้" type="text" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldComponent name="health.drug" label="ยาประจำตัว" type="text" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalHealthComponent }
