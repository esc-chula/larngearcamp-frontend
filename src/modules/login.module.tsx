import React, { useState } from "react"
import { TextField, Typography, Button, Container, Paper, Checkbox, FormControlLabel, Box, Link } from "@material-ui/core"
import { useForm } from "react-hook-form"
import LoginModel from "../core/models/login.model"
import { LoginService } from "../core/services/login.service"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import { FacebookButtonComponent } from "../core/components/facebookButton.component"
import { GoogleButtonComponent } from "../core/components/googleButton.component"
import { FormBodyComponent } from "../core/components/formBody.component"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  },
  checkbox: {
    "& > *": {
      color: grey[500]
    }
  },
  divider: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: grey[500],
    "&:before, &:after": {
      flex: 1,
      content: "''",
      borderBottom: "2px solid #e0e0e0"
    },
    "&:before": {
      marginRight: "1em"
    },
    "&:after": {
      marginLeft: "1em"
    }
  },
  rightAlign: {
    marginLeft: "auto"
  }
}))

const LoginModule = () => {
  const classes = useStyles()
  const [state, setState] = useState<LoginModel>()
  const [error, setError] = useState(false)
  const { register, handleSubmit } = useForm({})

  const onSubmit = async () => {
    console.log(state)
    const result = await LoginService(state)
    if (result.status !== 200) {
      setError(true)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    } as Pick<LoginModel, keyof LoginModel>)
  }

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    } as Pick<LoginModel, keyof LoginModel>)
  }

  return (
    <>
      <FormBodyComponent maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <TextField id="email" name="email" label="อีเมล" variant="outlined" type="email" onChange={handleChange} ref={register} size="small" />
          <TextField
            id="password"
            name="password"
            label="รหัสผ่าน"
            variant="outlined"
            type="password"
            onChange={handleChange}
            ref={register}
            size="small"
          />
          <FormControlLabel
            control={<Checkbox name="remember" color="primary" onChange={handleCheckBoxChange} />}
            label="จำฉันไว้ในระบบ"
            className={classes.checkbox}
          />
          <Button type="submit" variant="contained" color="primary">
            เข้าสู่ระบบ
          </Button>
          {error && (
            <Typography color="error" variant="body2">
              อีเมลหรือรหัสผ่านไม่ถูกต้อง
            </Typography>
          )}
        </form>

        <div className={classes.divider}>OR</div>
        <FacebookButtonComponent type="submit" variant="contained" color="primary">
          เข้าสู่ระบบด้วยบัญชี Facebook
        </FacebookButtonComponent>
        <GoogleButtonComponent type="submit" variant="contained" color="primary">
          เข้าสู่ระบบด้วยบัญชี Google
        </GoogleButtonComponent>
      </FormBodyComponent>

      <Box mt={4}>
        <Container maxWidth="sm">
          <Paper elevation={0}>
            <Box display="flex" alignItems="center" py={2} px={5}>
              <div> ยังไม่มีบัญชีลานเกียร์?</div>
              <Link className={classes.rightAlign}>ลงทะเบียน</Link>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export { LoginModule }
