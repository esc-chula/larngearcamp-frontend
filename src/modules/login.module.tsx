import React, { useCallback } from "react"
import { Link } from "react-router-dom"
import { Typography, Button, Container, Paper, Checkbox, FormControlLabel, Box } from "@material-ui/core"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import { LogoComponent } from "../core/components/logo.component"
import { FacebookButtonComponent } from "../core/components/facebookButton.component"
import { CardComponent } from "../core/components/card.component"
import { yupResolver } from "@hookform/resolvers"
import LoginSchema from "../schemas/login.schema"
import { useHistory } from "react-router-dom"
import { useAuthContext } from "../core/providers/auth.provider"
import { TextFieldComponent } from "../core/components/textField.component"
import { useLoadingCallback } from "../core/components/loading.component"
import BackgroundComponent from "../core/components/background.component"
import { AxiosError } from "axios"
import { GoogleButtonComponent } from "../core/components/googleButton.component"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(2)
    }
  },
  clearMargin: {
    margin: 0
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
    margin: theme.spacing(1, 0, 4, 0),
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
    fontWeight: 500,
    marginLeft: "auto",
    color: theme.palette.primary.main,
    "&:after": {
      background: theme.palette.primary.main
    }
  },
  redBg: {
    "&:after": {
      backgroundColor: theme.palette.primary.main
    }
  },
  registerPaper: {
    borderRadius: "10px"
  }
}))

const LoginModule = () => {
  const history = useHistory()
  const classes = useStyles()
  const { login } = useAuthContext()
  const methods = useForm({
    resolver: yupResolver(LoginSchema)
  })
  const { handleSubmit, control, getValues, setError, errors } = methods

  const onSubmit = useLoadingCallback(
    useCallback(async () => {
      const values = getValues(["email", "password"])
      try {
        await login(values)
        history.push("/profile")
      } catch (error) {
        setError("validate", {
          type: "validate",
          message: (error as AxiosError).response?.data.message
        })
      }
    }, [getValues, history, setError, login])
  )
  const closed = new Date() >= new Date("2021-10-30T00:00:00+07:00")

  return (
    <>
      <BackgroundComponent type="bg1" />
      <LogoComponent />
      <FormProvider {...methods}>
        <CardComponent maxWidth="sm" padding={4} keepPadding>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <TextFieldComponent name="email" label="อีเมล" type="email" />
            <TextFieldComponent name="password" label="รหัสผ่าน" type="password" />
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Controller
                name="remember"
                control={control}
                defaultValue={false}
                render={({ onChange, onBlur, value, name }) => (
                  <FormControlLabel
                    control={<Checkbox color="primary" onBlur={onBlur} onChange={e => onChange(e.target.checked)} checked={value} />}
                    label="จำฉันไว้ในระบบ"
                    className={classes.checkbox}
                  />
                )}
              />
              <Link to="/forgot-password" className={classes.redBg}>
                <Typography color="primary">ลืมรหัสผ่าน?</Typography>
              </Link>
            </Box>
            <Button type="submit" variant="contained" color="primary">
              เข้าสู่ระบบ
            </Button>
            {errors.validate && (
              <Typography color="error" variant="body2" className={classes.clearMargin}>
                อีเมลหรือรหัสผ่านไม่ถูกต้อง
              </Typography>
            )}
          </form>
          <div className={classes.divider}>OR</div>
          <FacebookButtonComponent variant="contained" color="primary"></FacebookButtonComponent>
          <GoogleButtonComponent variant="contained" color="primary"></GoogleButtonComponent>
        </CardComponent>
      </FormProvider>

      {closed ? (
        ""
      ) : (
        <Box mt={4}>
          <Container maxWidth="sm">
            <Paper elevation={0} className={classes.registerPaper}>
              <Box display="flex" alignItems="center" py={2} px={5}>
                <div>ยังไม่มีบัญชีลานเกียร์?</div>
                <Link className={classes.rightAlign} to="/register">
                  ลงทะเบียน
                </Link>
              </Box>
            </Paper>
          </Container>
        </Box>
      )}
    </>
  )
}

export { LoginModule }
