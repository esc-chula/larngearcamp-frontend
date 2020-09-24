import React, { useCallback } from "react"
import { Link, useHistory } from "react-router-dom"
import { Typography, Button, Container, Paper, Box } from "@material-ui/core"
import { useForm, FormProvider } from "react-hook-form"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import { LogoComponent } from "../core/components/logo.component"
import { FacebookButtonComponent } from "../core/components/facebookButton.component"
import { GoogleButtonComponent } from "../core/components/googleButton.component"
import { CardComponent } from "../core/components/card.component"
import { yupResolver } from "@hookform/resolvers"
import RegisterSchema from "../schemas/register.schema"
import { useAuthContext } from "../core/providers/auth.provider"
import { TextFieldComponent } from "../core/components/textField.component"
import UserServiceAPI from "../core/services/users.service"
import { useGlobalContext } from "../core/providers/global.provider"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  },
  clearMargin: {
    margin: 0
  },
  errorMessage: {
    marginTop: theme.spacing(-1)
  },
  checkbox: {
    "& > *": {
      color: grey[500]
    }
  },
  inputInLine: {
    "& > *": {
      maxWidth: "50%"
    },
    "& > *:nth-child(1)": {
      marginRight: theme.spacing(2)
    }
  },
  divider: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: grey[500],
    margin: theme.spacing(2, 0, 4, 0),
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

const RegisterModule = () => {
  const classes = useStyles()
  const history = useHistory()
  const { login } = useAuthContext()
  const methods = useForm({
    resolver: yupResolver(RegisterSchema)
  })
  const { setLoading } = useGlobalContext()
  const { handleSubmit, getValues } = methods
  const onSubmit = useCallback(async () => {
    setLoading(true)
    const values = getValues(["email", "password", "firstName", "lastName"])
    try {
      await UserServiceAPI.createUserAPI(values)
      await login({ email: values["email"], password: values["password"] })
      setLoading(false)
      history.push("/profile")
    } catch (error) {
      console.log(error)
    }
    setLoading(true)
  }, [getValues, history, login, setLoading])

  return (
    <>
      <LogoComponent />
      <FormProvider {...methods}>
        <CardComponent maxWidth="sm">
          <Box width="100%" margin="auto" mb={4} fontFamily="Kanit">
            <Typography variant="h6" align="center">
              เพื่อทำการสมัครเข้าค่ายลานเกียร์ครั้งที่ 20 น้องจำเป็นต้องสร้างบัญชีเพื่อดำเนินการต่อ
            </Typography>
          </Box>

          <FacebookButtonComponent type="submit" variant="contained" color="primary">
            เข้าสู่ระบบด้วยบัญชี Facebook
          </FacebookButtonComponent>
          <GoogleButtonComponent type="submit" variant="contained" color="primary">
            เข้าสู่ระบบด้วยบัญชี Google
          </GoogleButtonComponent>

          <div className={classes.divider}>OR</div>

          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Box display="flex" className={classes.inputInLine}>
              <TextFieldComponent id="firstName" name="firstName" label="ชื่อจริง" />
              <TextFieldComponent id="lastName" name="lastName" label="นามสกุล" />
            </Box>
            <TextFieldComponent id="email" name="email" label="อีเมล" type="email" />
            <TextFieldComponent id="password" name="password" label="รหัสผ่าน" type="password" />
            <TextFieldComponent id="passwordConfirmation" name="passwordConfirmation" label="ยืนยันรหัสผ่าน" type="password" />
            <Button type="submit" variant="contained" color="primary" className={classes.clearMargin}>
              ลงทะเบียน
            </Button>
          </form>
        </CardComponent>
      </FormProvider>

      <Box mt={4}>
        <Container maxWidth="sm">
          <Paper elevation={0}>
            <Box display="flex" alignItems="center" py={2} px={5}>
              <div> สร้างบัญชีเรียบร้อยแล้ว?</div>
              <Link className={classes.rightAlign} to="/login">
                เข้าสู่ระบบ
              </Link>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export { RegisterModule }
