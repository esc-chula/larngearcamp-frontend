import { string, object } from "yup"

const ForgotPasswordSchema = object().shape({
  email: string().trim().required("กรุณากรอกอีเมล")
})

export default ForgotPasswordSchema
