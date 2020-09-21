import React from "react"
import { Typography, FormControlLabel, Checkbox, Grid, RadioGroup, Radio } from "@material-ui/core"
import { Controller, useForm } from "react-hook-form"
import { makeStyles } from "@material-ui/core/styles"

const documentStatsuLabel = ["รอการตรวจสอบสถานะ", "เอกสารผ่านทั้งหมด", "รูปถ่ายผู้สมัคร", "ใบตอบรับผู้ปกครอง", "เอกสารยืนยันตัวตน"]
const applicantStatus = ["รอคัดรอบสัมภาษณ์", "ไม่ผ่านไปรอบสัมภาษณ์", "ได้รับเลือกไปสัมภาษณ์", "ไม่ได้รับเลือกเข้าค่าย", "ได้รับเลือกเข้าค่าย"]

const useStyles = makeStyles(theme => ({
  group: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    width: "auto",
    margin: theme.spacing(1, 2)
  },
  label: {
    "&>span": {
      fontSize: "0.8rem"
    }
  }
}))

const CheckListComponent = () => {
  const classes = useStyles()
  const { control } = useForm()

  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={6}>
        <Typography variant="body1">เลือกเอกสารที่ไม่ผ่าน </Typography>
        <div className={classes.group}>
          {documentStatsuLabel.map((label, index) => (
            <Controller
              key={`docs-${index}`}
              name={`docs-${index}`}
              control={control}
              defaultValue={false}
              render={({ onChange, onBlur, value, name }) => (
                <FormControlLabel
                  name={name}
                  label={label}
                  className={classes.label}
                  control={<Checkbox color="primary" onBlur={onBlur} onChange={e => onChange(e.target.checked)} checked={value} size="small" />}
                />
              )}
            />
          ))}
        </div>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">เลือกสถานะปัจจุบัน</Typography>
        <div className={classes.group}>
          <Controller
            name={`applicant-status`}
            control={control}
            defaultValue={false}
            as={
              <RadioGroup aria-label={`applicant-status`}>
                {applicantStatus.map((label, index) => (
                  <FormControlLabel
                    key={index}
                    className={classes.label}
                    label={label}
                    value={`choice${index + 1}`}
                    control={<Radio color="primary" size="small" />}
                  />
                ))}
              </RadioGroup>
            }
          />
        </div>
      </Grid>
    </Grid>
  )
}

export { CheckListComponent }
