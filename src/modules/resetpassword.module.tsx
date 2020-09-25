import React, { useCallback, useState } from "react"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import { CardComponent } from "../core/components/card.component"
import { LogoComponent } from "../core/components/logo.component"
import { Box, Button, makeStyles, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import { useAuthContext } from "../core/providers/auth.provider"
import { useHistory } from "react-router-dom"
import { TextFieldComponent } from "../core/components/textField.component"
import ResetPasswordSchema from "../schemas/resetpassword.schema"
import { useQueryString } from "../utils/hooks"
import { useLoadingCallback } from "../core/components/loading.component"
import BackgroundComponent from "../core/components/background.component"

const useStyles = makeStyles(theme => ({
  divider: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: grey[300],
    borderBottom: "2px solid #e0e0e0"
  },
  remark: {
    fontSize: "16px",
    fontWeight: 300
  },
  clearMargin: {
    margin: 0
  },
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(3)
    }
  },
  marginTop: {
    marginTop: "16px"
  }
}))

const ResetPasswordModule: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const { resetPassword } = useAuthContext()
  const [finished, setFinished] = useState(false)
  const query = useQueryString()
  const token = query.token as string

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema)
  })
  const { handleSubmit, getValues, setError, errors } = methods

  const onSubmit = useLoadingCallback(
    useCallback(async () => {
      const { password } = getValues(["password"])
      try {
        await resetPassword({ token, password })
        setFinished(true)
      } catch (error) {
        switch (error.response?.status) {
          case 400:
            setError("invalid", {
              type: "invalid"
            })
            break
          case 401:
            setError("expired", {
              type: "expired"
            })
            break
          case 404:
            setError("notFound", {
              type: "notFound"
            })
            break
        }
      }
    }, [getValues, resetPassword, setError, token])
  )

  const changePage = useCallback(
    (path: string) => () => {
      history.push(path)
    },
    [history]
  )

  const UnfinishedComponent = (
    <>
      <BackgroundComponent type="bg2" />
      <Typography align="center" className={classes.remark}>
        โปรดระบุรหัสผ่านใหม่
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <TextFieldComponent name="password" label="รหัสผ่านใหม่" type="password" />
          <TextFieldComponent name="passwordConfirmation" label="ยืนยันรหัสผ่าน" type="passwordConfirmation" />
          <Button type="submit" variant="contained" color="primary">
            <Typography variant="button">เปลี่ยนรหัสผ่าน</Typography>
          </Button>
          {errors.invalid && (
            <Typography color="error" variant="body2" className={classes.clearMargin}>
              Reset Token หรือรหัสผ่านไม่ถูกต้อง
            </Typography>
          )}
          {errors.expired && (
            <Typography color="error" variant="body2" className={classes.clearMargin}>
              Reset Token หมดอายุ
            </Typography>
          )}
          {errors.notFound && (
            <Typography color="error" variant="body2" className={classes.clearMargin}>
              ไม่พบบัญชีที่ต้องการเปลี่ยนรหัสผ่าน
            </Typography>
          )}
        </form>
      </FormProvider>
    </>
  )

  const FinishedComponent = (
    <Box textAlign="center">
      <CheckCircleIcon style={{ color: "#38A169", fontSize: "48px" }} />
      <Typography className={classes.remark}>การเปลี่ยนรหัสผ่านเสร็จสมบูรณ์ กรุณาเข้าสู่ระบบอีกครั้งด้วยรหัสผ่านใหม่</Typography>
      <Button onClick={changePage("/login")} variant="contained" color="primary" className={classes.marginTop} fullWidth>
        <ChevronLeftIcon style={{ fontSize: "28px" }} />
        <Typography variant="button">กลับสู่หน้าเข้าสู่ระบบ</Typography>
      </Button>
    </Box>
  )

  return (
    <>
      <LogoComponent />
      <CardComponent maxWidth="sm" padding={4}>
        <Typography variant="h6" align="center">
          เปลี่ยนรหัสผ่าน
        </Typography>
        <div className={classes.divider} />
        {finished ? FinishedComponent : UnfinishedComponent}
      </CardComponent>
    </>
  )
}

export { ResetPasswordModule }
