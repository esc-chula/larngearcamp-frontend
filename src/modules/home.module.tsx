import React from "react"
import CoverComponent from "../core/components/cover/cover.component"
import { Container } from "react-bootstrap"

const HomeModule: React.FC = () => {
  return (
    <>
      <CoverComponent />
      <Container fluid="md" className="d-flex justify-content-center"></Container>
    </>
  )
}

export default HomeModule
