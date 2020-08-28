import React from "react"
import LandingComponent from "../core/components/cover/cover"
import { Container } from "react-bootstrap"

const HomeModule: React.FC = () => {
  return (
    <>
      <LandingComponent />
      <Container fluid="md" className="d-flex justify-content-center"></Container>
    </>
  )
}

export default HomeModule
