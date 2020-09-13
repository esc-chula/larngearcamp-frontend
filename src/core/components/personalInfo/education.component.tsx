import React, { useCallback, useState } from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField } from "@material-ui/core"
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
  const [grade, setGrade] = useState("")
  const [schoolProvince, setSchoolProvince] = useState("")
  const { register, setValue } = useFormContext()
  const classes = useStyles()
  const handleChange = useCallback(
    event => {
      setValue(event.target.name, event.target.value)
      event.target.name === "grade" && setGrade(event.target.value)
      event.target.name === "schoolProvince" && setSchoolProvince(event.target.value)
    },
    [setValue]
  )
  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ข้อมูลการศึกษา
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <SelectComponent
              variant="outlined"
              size="small"
              fullWidth
              data={gradesConstant}
              onChange={handleChange}
              value={grade}
              cusTomRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SelectComponent
              variant="outlined"
              size="small"
              fullWidth
              data={provincesConstant}
              onChange={handleChange}
              value={schoolProvince}
              cusTomRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TextField
              id="school"
              name="school"
              label="โรงเรียน"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalEducationComponent }
