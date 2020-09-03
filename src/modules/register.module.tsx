import React from "react"
import RegisterSchema from "../schemas/register.schema"
import { yupResolver } from "@hookform/resolvers"
import { useForm } from "react-hook-form"

const RegisterModule = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
    resolver: yupResolver(RegisterSchema)
  })
  console.log(errors)
  const onSubmit = (data: JSON) => console.log(data)

  return <></>
}

export { RegisterModule }
