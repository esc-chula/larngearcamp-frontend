import { string, object, ref } from "yup"

const ResetPasswordSchema = object().shape({
  password: string()
    .trim()
    .required("กรุณากรอกรหัสผ่าน")
    .matches(/^.{8,16}$/, "รหัสผ่านควรมีความยาว 8-16 ตัวอักษร"),
  passwordConfirmation: string()
    .trim()
    .oneOf([ref("password")], "รหัสผ่านไม่ตรงกัน")
})

export default ResetPasswordSchema
