import React from "react"
import "./sample.style.scss"
import logo from "../../../assets/images/gear-logo.svg"

const SampleComponent: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ marginTop: "1em" }}>ค่ายลานเกียร์ครั้งที่ 20</p>
      </header>
    </div>
  )
}

export default SampleComponent
