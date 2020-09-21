import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField, TextFieldProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SelectComponent } from "../select.component"
import { bloodGroupsConstant } from "../../constants/bloodGroups.constant"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 500
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const inputPropsConstant: TextFieldProps = {
  size: "small",
  fullWidth: true,
  variant: "outlined"
}

const PersonalHealthComponent = () => {
  const { register, control } = useFormContext()
  const classes = useStyles()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold}`}>
          ข้อมูลสุขภาพ
        </Typography>
        <Typography variant="body2" className={`${classes.title}`}>
          หากมีหลายข้อให้คั่นคำตอบด้วย comma
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <SelectComponent control={control} data={bloodGroupsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <TextField name="health.cogenitalDisease" label="โรคประจำตัว" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TextField name="health.foodAllergy" label="แพ้อาหาร" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField name="health.drugAllergy" label="แพ้ยา" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField name="health.drug" label="ยาที่ต้องใช้ประจำ" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalHealthComponent }
