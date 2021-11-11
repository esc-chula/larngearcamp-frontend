import React from "react"
import { Typography, Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import { TextFieldComponent } from "../textField.component"
import AddressFieldComponent from "./addressField.component"
import { NumberTextFieldComponent } from "../numberTextField.component"

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

const PersonalContactComponent = () => {
  const classes = useStyles()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ที่อยู่ที่สามารถติดต่อได้สะดวกและข้อมูลการติดต่อ
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldComponent name="contact.recipient" label="ชื่อ-นามสกุลผู้รับพัสดุ" type="text" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldComponent name="contact.address" label="บ้านเลขที่ หมู่ที่ และถนน" type="text" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AddressFieldComponent type="district" label="ตำบล/แขวง" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AddressFieldComponent type="amphoe" label="อำเภอ/เขต" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AddressFieldComponent type="province" label="จังหวัด" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AddressFieldComponent type="zipcode" label="รหัสไปรษณีย์" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NumberTextFieldComponent name="contact.homeNumber" label="โทรศัพท์บ้าน" type="tel" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NumberTextFieldComponent name="contact.phoneNumber" label="โทรศัพท์มือถือ" type="tel" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextFieldComponent name="contact.facebookName" label="Facebook" type="text" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextFieldComponent name="contact.lineId" label="Line ID" type="text" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalContactComponent }
