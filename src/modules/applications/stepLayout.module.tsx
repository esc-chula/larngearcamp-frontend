import React from "react"
import { Container } from "@material-ui/core"
import ButtonBar from "../../core/components/buttonBar.component"

type ApplicationStepModuleProps = {
  children: (props: { ButtonBar: () => JSX.Element }) => React.ReactElement
}

const ApplicationStepModule: React.FC<ApplicationStepModuleProps> = ({ children }) => {
  return <Container maxWidth="lg">{children({ ButtonBar })}</Container>
}

export default ApplicationStepModule
