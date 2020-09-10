import { ref, string, object } from "yup"

const RegisterSchema = object().shape({
  name: string().trim().required("Enter your name"),
  surname: string().trim().required("Enter your surname"),
  email: string().trim().required("Enter your email").email("Invalid email"),
  password: string()
    .trim()
    .required("Enter your password")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])?.{8,16}$/,
      "Password should contain atleast 1 lowercase letter, 1 uppercase letter and 1 special character"
    ),
  passwordConfirmation: string()
    .trim()
    .oneOf([ref("password")], "Password doesn't match")
})

export default RegisterSchema
