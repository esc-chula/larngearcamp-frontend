import { ref, string, object } from "yup"

const RegisterSchema = object().shape({
  firstName: string().trim().required("กรุณากรอกชื่อจริง"),
  lastName: string().trim().required("กรุณากรอกนามสกุล"),
  email: string().trim().required("กรุณากรอกอีเมล").email("อีเมลไม่ถูกต้อง"),
  password: string()
    .trim()
    .required("กรุณากรอกรหัสผ่าน")
    .matches(/^.{8,16}$/, "รหัสผ่านควรมีความยาว 8-16 ตัวอักษร"),
  passwordConfirmation: string()
    .trim()
    .oneOf([ref("password")], "รหัสผ่านไม่ตรงกัน")
})

export default RegisterSchema
