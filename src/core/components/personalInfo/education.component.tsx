import React, { useCallback, useMemo } from "react"
import { useFormContext, useWatch } from "react-hook-form"
import { Typography, Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gradesConstant } from "../../constants/grades.constant"
import { SelectComponent } from "../select.component"
import { provincesConstant } from "../../constants/provinces.constant"
import { TextFieldComponent } from "../textField.component"
import Autocomplete from "@material-ui/lab/Autocomplete"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 500
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const PersonalEducationComponent = () => {
  const { control, setValue } = useFormContext()
  const classes = useStyles()

  const province = useWatch({ name: "province" })
  const handleProvinceChange = useCallback(
    (_event, newInputValue) => {
      setValue("province", newInputValue)
    },
    [setValue]
  )

  const options = useMemo(() => ["", ...provincesConstant], [])
  const filterOptions = useCallback(() => provincesConstant, [])

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
            <Autocomplete
              options={options}
              disableClearable
              value={province}
              onChange={handleProvinceChange}
              getOptionSelected={(option: string, value: string) => !!value && option.indexOf(value) === 0}
              filterOptions={filterOptions}
              renderInput={params => <TextFieldComponent {...params} name="province" label="จังหวัด" />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TextFieldComponent name="school" label="โรงเรียน" type="text" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalEducationComponent }
