import React, { useCallback } from "react"
import { useFormContext } from "react-hook-form"
import { Typography, Box, Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: "bold"
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

const PersonalHealthComponent = () => {
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
          ข้อมูลสุขภาพ
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              id="title"
              name="title"
              label="คำนำหน้า"
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
