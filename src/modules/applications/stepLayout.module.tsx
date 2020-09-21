import React from "react"
import { Container } from "@material-ui/core"
import ButtonBar from "../../core/components/buttonBar.component"

type ApplicationStepModuleProps = {
  children: (props: { ButtonBar: (props: { onSubmit: () => void }) => React.ReactElement<any, any> | null }) => React.ReactElement
}

const ApplicationStepModule: React.FC<ApplicationStepModuleProps> = ({ children }) => {
  const IntegratedOnSubmit = (props: { onSubmit: () => void }) => ButtonBar(props)
  return <Container maxWidth="lg">{children({ ButtonBar: IntegratedOnSubmit })}</Container>
}

export default ApplicationStepModule
