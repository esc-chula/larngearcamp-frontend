import React, { useCallback, useState } from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SelectComponent } from "../select.component"
import { bloodGroupsConstant } from "../../constants/bloodGroups.constant"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: "bold"
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const PersonalHealthComponent = () => {
  const [bloodGroup, setBloodGroup] = useState("")
  const { register, setValue } = useFormContext()
  const classes = useStyles()
  const handleChange = useCallback(
    event => {
      setValue(event.target.name, event.target.value)
      event.target.name === "bloodGroup" && setBloodGroup(event.target.value)
    },
    [setValue]
  )
  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" className={`${classes.bold} ${classes.title}`}>
          ข้อมูลสุขภาพ
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <SelectComponent
              variant="outlined"
              size="small"
              fullWidth
              data={bloodGroupsConstant}
              onChange={handleChange}
              value={bloodGroup}
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
        </Grid>
      </Box>
    </>
  )
}

export { PersonalHealthComponent }
