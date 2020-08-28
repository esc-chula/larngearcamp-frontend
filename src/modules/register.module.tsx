import React from "react"
import { Button, Form, Container } from "react-bootstrap"
import RegisterSchema from "../schemas/registerSchema"
import { yupResolver } from "@hookform/resolvers"
import { useForm } from "react-hook-form"

const RegisterModule = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onBlur",
    resolver: yupResolver(RegisterSchema)
  })
  const onSubmit = (data: JSON) => console.log(data)

  return (
    <Container fluid="md">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" ref={register} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" ref={register} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" name="password" ref={register} />
        </Form.Group>

        <Form.Group controlId="formPasswordConfirmation">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm your password" name="passwordConfirmation" ref={register} />
        </Form.Group>

        <Form.Group controlId="formRememberMe">
          <Form.Check type="checkbox" label="remember me" name="formRememberMe" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default RegisterModule
