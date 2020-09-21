import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField, Button } from "@material-ui/core"
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

const PersonalEducationComponent = () => {
  const { register, control, getValues } = useFormContext()
  const classes = useStyles()
  const check = () => {
    const values = getValues()
    console.log(values)
  }
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
            <TextField id="school" name="school" label="โรงเรียน" variant="outlined" type="text" ref={register} size="small" fullWidth />
          </Grid>
        </Grid>
      </Box>
      <Button onClick={check}>Cccc</Button>
    </>
  )
}

export { PersonalEducationComponent }
