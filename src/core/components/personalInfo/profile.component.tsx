import React, { useCallback, useState } from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField, MenuItem, FormControl, InputLabel, Select } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: "bold"
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const PersonalProfileComponent = () => {
  const [title, setTitle] = useState("")
  const { register, setValue } = useFormContext()
  const classes = useStyles()

  const handleChange = useCallback(
    event => {
      setValue(event.target.name, event.target.value)
      event.target.name === "title" && setTitle(event.target.value)
    },
    [setValue]
  )
  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ข้อมูลส่วนตัว
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="title-label">คำนำหน้า</InputLabel>
              <Select labelId="title-label" id="title" name="title" value={title} onChange={handleChange} label="คำนำหน้า">
                <MenuItem value="นาย">นาย</MenuItem>
                <MenuItem value="นางสาว">นางสาว</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              id="name"
              name="name"
              label="ชื่อจริง"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <TextField
              id="surname"
              name="surname"
              label="นามสกุล"
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
              id="nickname"
              name="nickname"
              label="ชื่อเล่น"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="birthDate"
              name="birthDate"
              variant="outlined"
              type="date"
              label="วันเกิด"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              id="age"
              name="age"
              label="อายุ"
              variant="outlined"
              type="text"
              onChange={handleChange}
              ref={register}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="religion-label">ศาสนา</InputLabel>
              <Select labelId="religion-label" id="religion" name="religion" value={title} onChange={handleChange} label="ศาสนา">
                <MenuItem value="พุทธ">พุทธ</MenuItem>
                <MenuItem value="คริสต์">คริสต์</MenuItem>
                <MenuItem value="อิสลาม">อิสลาม</MenuItem>
                <MenuItem value="พราหมณ์-ฮินดู">พราหมณ์-ฮินดู</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { PersonalProfileComponent }
