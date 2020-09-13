import React, { useCallback, useState } from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { titlesConstant } from "../../constants/titles.constants"
import { SelectComponent } from "../select.component"
import { religionsConstant } from "../../constants/religions.constant"

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
  const [religion, setReligion] = useState("")
  const { register, setValue } = useFormContext()
  const classes = useStyles()

  const handleChange = useCallback(
    event => {
      setValue(event.target.name, event.target.value)
      event.target.name === "title" && setTitle(event.target.value)
      event.target.name === "religion" && setReligion(event.target.value)
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
          <Grid item xs={12} sm={12} md={2}>
            <SelectComponent
              variant="outlined"
              size="small"
              fullWidth
              data={titlesConstant}
              onChange={handleChange}
              value={title}
              cusTomRef={register}
            />
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
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={3}>
            <SelectComponent
              variant="outlined"
              size="small"
              fullWidth
              data={religionsConstant}
              onChange={handleChange}
              value={religion}
              cusTomRef={register}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
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
        </Grid>
      </Box>
    </>
  )
}

export { PersonalProfileComponent }
