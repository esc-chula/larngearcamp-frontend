import React, { useCallback, useState } from "react"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import { CardComponent } from "../core/components/card.component"
import { LogoComponent } from "../core/components/logo.component"
import { Box, Button, makeStyles, TextField, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import ForgotPasswordSchema from "../schemas/forgotpassword.schema"
import { useGlobalContext } from "../core/providers/global.provider"
import { useAuthContext } from "../core/providers/auth.provider"
import { useHistory } from "react-router-dom"

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
      marginBottom: theme.spacing(4)
    }
  },
  marginTop: {
    marginTop: "24px"
  }
}))

const ForgotPasswordModule: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const { setLoading } = useGlobalContext()
  const { forgotPassword } = useAuthContext()
  const [finished, setFinished] = useState(false)

  const { register, handleSubmit, setValue, getValues, errors } = useForm({
    resolver: yupResolver(ForgotPasswordSchema)
  })

  const onSubmit = useCallback(async () => {
    setLoading(true)
    const values = getValues(["email"])
    await forgotPassword(values)
    setLoading(false)
    setFinished(true)
  }, [getValues, setLoading, forgotPassword])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.name, event.target.value)
    },
    [setValue]
  )

  const changePage = useCallback(
    (path: string) => () => {
      history.push(path)
    },
    [history]
  )

  const UnfinishedComponent = (
    <>
      <Typography align="center" className={classes.remark}>
        ขอให้น้องกรอกอีเมลที่ใช้สร้างบัญชีเพื่อยืนยันตัวตน
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          id="email"
          name="email"
          label="อีเมล"
          variant="outlined"
          type="email"
          onChange={handleChange}
          ref={register}
          size="small"
          error={Boolean(errors?.email)}
          helperText={errors?.email?.message}
        />
        <Button type="submit" variant="contained" color="primary">
          <Typography variant="h6">ยืนยันอีเมล</Typography>
        </Button>
      </form>
    </>
  )

  const FinishedComponent = (
    <Box textAlign="center">
      <CheckCircleIcon style={{ color: "#38A169", fontSize: "48px" }} />
      <Typography className={classes.remark}>ระบบได้ทำการส่งลิงก์เปลี่ยนรหัสผ่านไปยังอีเมลที่ระบุแล้ว กรุณาเช็คอีเมลเพื่อดำเนินการต่อไป</Typography>
      <Button onClick={changePage("/login")} variant="contained" color="primary" className={classes.marginTop} fullWidth>
        <ChevronLeftIcon style={{ fontSize: "32px" }} />
        <Typography variant="h6">กลับสู่หน้าเข้าสู่ระบบ</Typography>
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

export { ForgotPasswordModule }
