import { string, object } from "yup"

const LoginSchema = object().shape({
  email: string().trim().required("Enter your email"),
  password: string().trim().required("Enter your password")
})

export default LoginSchema
