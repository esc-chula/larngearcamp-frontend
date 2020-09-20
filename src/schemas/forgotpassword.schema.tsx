import { string, object } from "yup"

const ForgotPasswordSchema = object().shape({
  email: string().trim().required("Enter your email")
})

export default ForgotPasswordSchema
