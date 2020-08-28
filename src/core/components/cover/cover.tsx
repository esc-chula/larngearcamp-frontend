import React from "react"
import "./cover.style.scss"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const LandingComponent: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center landing">
        <div className="text-white title">Title</div>
        <div className="d-flex justify-content-end button-group">
          <Link to="/register">
            <Button variant="primary">Register</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline-primary">Login</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LandingComponent
