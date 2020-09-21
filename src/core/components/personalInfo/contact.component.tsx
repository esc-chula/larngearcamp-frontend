import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField, TextFieldProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useAuthContext } from "../../providers/auth.provider"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 500
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  disabled: {
    background: grey[200]
  },
  inputDisabled: {
    color: theme.palette.primary.main
  }
}))

const inputPropsConstant: TextFieldProps = {
  size: "small",
  fullWidth: true,
  variant: "outlined"
}

const PersonalContactComponent = () => {
  const { register } = useFormContext()
  const classes = useStyles()
  const { me } = useAuthContext()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ที่อยู่ที่สามารถติดต่อได้สะดวกและข้อมูลการติดต่อ
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField name="contacnt.receiver" label="ชื่อ-นามสกุลผู้รับส่ง" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField name="contacnt.address" label="บ้านเลขที่ หมูที่ และถนน" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField name="contacnt.subDistrict" label="ตำบล/แขวง" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField name="contacnt.district" label="อำเภอ/เขต" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField name="contacnt.province" label="จังหวัด" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField name="contacnt.zip" label="รหัสไปรษณีย์" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField name="contacnt.homeNumber" label="โทรศัพท์บ้าน" type="tel" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField name="contacnt.phoneNumber" label="โทรศัพท์มือถือ" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              label="อีเมล"
              value={me.data?.email || ""}
              type="email"
              disabled
              className={classes.disabled}
              {...inputPropsConstant}
              inputProps={{ className: classes.inputDisabled }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField name="contacnt.facebookName" label="Facebook" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField name="contacnt.lineId" label="Line ID" type="text" inputRef={register} {...inputPropsConstant} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalContactComponent }
