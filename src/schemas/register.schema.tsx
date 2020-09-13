import { ref, string, object } from "yup"

const RegisterSchema = object().shape({
  firstName: string().trim().required("Enter your name"),
  lastName: string().trim().required("Enter your surname"),
  email: string().trim().required("Enter your email").email("Invalid email"),
  password: string()
    .trim()
    .required("Enter your password")
    .matches(/^.{8,16}$/, "Password should contain 8 - 16 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])?.{8,16}$/,
      "Password should contain at least 1 lowercase letter, 1 uppercase letter"
    ),
  passwordConfirmation: string()
    .trim()
    .oneOf([ref("password")], "Password doesn't match")
})

export default RegisterSchema
