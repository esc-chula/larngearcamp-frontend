import { ref, string, object } from "yup"

const RegisterSchema = object().shape({
  name: string().min(8).required("Required"),
  email: string().email("Invalid email").required("Required"),
  password: string().min(8).required("Required"),
  passwordConfirmation: string().oneOf([ref("password")], "Passwords must match")
})

export default RegisterSchema
