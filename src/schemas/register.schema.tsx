import { ref, string, object } from "yup"

const RegisterSchema = object().shape({
  email: string().trim().required("plaese enter your email").email("invalid email"),
  password: string()
    .trim()
    .required("plaese enter your password")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])?.{8,16}$/,
      "password should contain atleast 1 lowercase letter, 1 uppercase letter and 1 special character"
    ),
  passwordConfirmation: string()
    .trim()
    .oneOf([ref("password")], "password doesn't match")
    .required("plaese enter your password")
})

export default RegisterSchema
