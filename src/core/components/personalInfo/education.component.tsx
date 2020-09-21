import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField, TextFieldProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gradesConstant } from "../../constants/grades.constant"
import { SelectComponent } from "../select.component"
import { provincesConstant } from "../../constants/provinces.constant"

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

const PersonalEducationComponent = () => {
  const { register, control } = useFormContext()
  const classes = useStyles()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ข้อมูลการศึกษา
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <SelectComponent control={control} data={gradesConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SelectComponent control={control} data={provincesConstant} />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TextField name="school" label="โรงเรียน" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalEducationComponent }
