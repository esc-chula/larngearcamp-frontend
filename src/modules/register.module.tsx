import React from "react"
import { TextField, Typography, Button, Container, Paper, Box, Link } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import { FacebookButtonComponent } from "../core/components/facebookButton.component"
import { GoogleButtonComponent } from "../core/components/googleButton.component"
import { CardComponent } from "../core/components/card.component"
import { yupResolver } from "@hookform/resolvers"
import RegisterSchema from "../schemas/register.schema"
import UsersService from "../core/services/users.service"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2)
    },
    "& > button": {
      marginBottom: theme.spacing(0)
    }
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
    margin: theme.spacing(4, 0),
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
  const { register, handleSubmit, errors, setValue, getValues } = useForm({
    resolver: yupResolver(RegisterSchema)
  })

  const onSubmit = async () => {
    const values = getValues(["email", "password"])
    await UsersService.createUser(values)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.name, event.target.value)
  }

  return (
    <>
      <CardComponent maxWidth="sm">
        <Box width="100%" margin="auto" mb={4} fontFamily="Kanit">
          <Typography variant="h6" align="center">
            น้องต้องสร้างบัญชีเพื่อทำการสมัคร เข้าค่ายลานเกียร์ครั้งที่ 20 นี้ด้วยนะครับ
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
            <TextField
              id="name"
              name="name"
              label="ชื่อจริง"
              variant="outlined"
              type="string"
              onChange={handleChange}
              ref={register}
              size="small"
              error={Boolean(errors?.name)}
              helperText={errors?.name?.message}
            />
            <TextField
              id="surname"
              name="surname"
              label="นามสกุล"
              variant="outlined"
              type="string"
              onChange={handleChange}
              ref={register}
              size="small"
              error={Boolean(errors?.surname)}
              helperText={errors?.surname?.message}
            />
          </Box>
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
          <TextField
            id="password"
            name="password"
            label="รหัสผ่าน"
            variant="outlined"
            type="password"
            onChange={handleChange}
            ref={register}
            size="small"
            error={Boolean(errors?.password)}
            helperText={errors?.password?.message}
          />
          <TextField
            id="passwordConfirmation"
            name="passwordConfirmation"
            label="ยืนยันรหัสผ่าน"
            variant="outlined"
            type="password"
            onChange={handleChange}
            ref={register}
            size="small"
            error={Boolean(errors?.passwordConfirmation)}
            helperText={errors?.passwordConfirmation?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            ลงทะเบียน
          </Button>
        </form>
      </CardComponent>

      <Box mt={4}>
        <Container maxWidth="sm">
          <Paper elevation={0}>
            <Box display="flex" alignItems="center" py={2} px={5}>
              <div> สร้างบัญชีเรียบร้อยแล้ว?</div>
              <Link className={classes.rightAlign} href="/login">
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
