import React from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SelectComponent } from "../select.component"
import { relationsConstant } from "../../constants/relation.constant"
import { TextFieldComponent } from "../textField.component"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 500
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const PersonalEmergencyComponent = () => {
  const { control } = useFormContext()
  const classes = useStyles()

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ข้อมูลการติดต่อผู้ปกครอง
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5}>
            <TextFieldComponent name="contact.parentName" label="ชื่อ-นามสกุลผู้ปกครอง" type="text" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextFieldComponent name="contact.parentNumber" label="หมายเลขโทรศัพท์ผู้ปกครอง" type="tel" />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <SelectComponent control={control} data={relationsConstant} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalEmergencyComponent }
