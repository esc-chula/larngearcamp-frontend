import { string, object } from "yup"

const LoginSchema = object().shape({
  email: string().trim().required("กรุณากรอกอีเมล"),
  password: string().trim().required("กรุณากรอกรหัสผ่าน")
})

export default LoginSchema
