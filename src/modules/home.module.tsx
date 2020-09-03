import React from "react"
import { CoverComponent } from "../core/components/cover.component"
import { NavBarComponent } from "../core/components/navbar.component"

const HomeModule: React.FC = () => {
  return (
    <>
      <NavBarComponent />
      <CoverComponent />
    </>
  )
}

export default HomeModule
