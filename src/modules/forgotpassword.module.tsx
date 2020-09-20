import React, { useCallback } from "react"
import { CardComponent } from "../core/components/card.component"
import { LogoComponent } from "../core/components/logo.component"
import { Button, makeStyles, TextField, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import ForgotPasswordSchema from "../schemas/forgotpassword.schema"
import { useGlobalContext } from "../core/providers/global.provider"

const useStyles = makeStyles(theme => ({
  divider: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: grey[300],
    borderBottom: "2px solid #e0e0e0"
  },
  remark: {
    fontSize: "18px",
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
  }
}))

const ForgotPasswordModule: React.FC = () => {
  const classes = useStyles()
  const { setLoading } = useGlobalContext()

  const { register, handleSubmit, setValue, getValues, setError, errors } = useForm({
    resolver: yupResolver(ForgotPasswordSchema)
  })

  const onSubmit = useCallback(async () => {
    setLoading(true)
    const values = getValues(["email", "password"])
    // const result = await login(values)
    // if (result.status !== 200) {
    //   setError("validate", {
    //     type: "validate",
    //     message: result.data.message
    //   })
    // } else {
    //  history.push("/profile")
    // }
    setLoading(false)
  }, [getValues, setError, setLoading])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.name, event.target.value)
    },
    [setValue]
  )

  return (
    <>
      <LogoComponent />
      <CardComponent maxWidth="sm" padding={4}>
        <Typography variant="h6" align="center">
          เปลี่ยนรหัสผ่าน
        </Typography>
        <div className={classes.divider} />
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
            ยืนยันอีเมล
          </Button>
          {errors.validate && (
            <Typography color="error" variant="body2" className={classes.clearMargin}>
              อีเมลไม่ถูกต้อง
            </Typography>
          )}
        </form>
      </CardComponent>
    </>
  )
}

export { ForgotPasswordModule }
