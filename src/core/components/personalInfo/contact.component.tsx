import React, { useCallback } from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 500
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const PersonalContactComponent = () => {
  const { register, setValue } = useFormContext()
  const classes = useStyles()
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.name, event.target.value)
    },
    [setValue]
  )
  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ที่อยู่ที่สามารถติดต่อได้สะดวกและข้อมูลการติดต่อ
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              id="receiver"
              name="receiver"
              label="ชื่อ-นามสกุลผู้รับส่ง"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              id="address"
              name="address"
              label="บ้านเลขที่ หมูที่ และถนน"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="subDistrict"
              name="subDistrict"
              label="ตำบล/แขวง"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="district"
              name="district"
              label="อำเภอ/เขต"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="province"
              name="province"
              label="จังหวัด"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="postalCode"
              name="postalCode"
              label="รหัสไปรษณีย์"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="homeTel"
              name="homeTel"
              label="โทรศัพท์บ้าน"
              variant="outlined"
              type="tel"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="tel"
              name="tel"
              label="โทรศัพท์มือถือ"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              id="email"
              name="email"
              label="อีเมล"
              variant="outlined"
              type="email"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="facebook"
              name="facebook"
              label="Facebook"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="line"
              name="line"
              label="Line ID"
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

export { PersonalContactComponent }
