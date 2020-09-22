import { string, object, ref } from "yup"

const ResetPasswordSchema = object().shape({
  password: string()
    .trim()
    .required("กรุณากรอกรหัสผ่าน")
    .matches(/^.{8,16}$/, "รหัสผ่านควรมีความยาว 8-16 ตัวอักษร")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])?.{8,16}$/,
      "รหัสผ่านควรมีตัวพิมพ์ใหญ่และตัวพิมพ์เล็กอย่างน้อย 1 ตัวอักษร"
    ),
  passwordConfirmation: string()
    .trim()
    .oneOf([ref("password")], "รหัสผ่านไม่ตรงกัน")
})

export default ResetPasswordSchema
