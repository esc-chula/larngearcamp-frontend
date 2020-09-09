import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const HomeModule: React.FC = () => {
  return (
    <Link to="/register">
      <Button style={{ display: "none" }}>Register</Button>
    </Link>
  )
}

export default HomeModule
