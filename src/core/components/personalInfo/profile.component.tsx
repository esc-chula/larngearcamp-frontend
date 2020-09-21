import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField, TextFieldProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { titlesConstant } from "../../constants/titles.constants"
import { SelectComponent } from "../select.component"
import { religionsConstant } from "../../constants/religions.constant"
import { useAuthContext } from "../../providers/auth.provider"

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

const PersonalProfileComponent = () => {
  const { register, control } = useFormContext()
  const classes = useStyles()
  const { me } = useAuthContext()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ข้อมูลส่วนตัว
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2}>
            <SelectComponent control={control} data={titlesConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <TextField name="name" label="ชื่อจริง" type="text" inputRef={register} defaultValue={me.data?.name?.first} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <TextField name="surname" label="นามสกุล" type="text" inputRef={register} defaultValue={me.data?.name?.second} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField name="nickname" label="ชื่อเล่น" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SelectComponent data={religionsConstant} control={control} />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TextField
              name="birthDate"
              type="date"
              label="วันเกิด"
              inputRef={register}
              InputLabelProps={{
                shrink: true
              }}
              {...inputPropsConstant}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalProfileComponent }
