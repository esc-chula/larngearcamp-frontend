import React from "react"
import { useRouteMatch } from "react-router-dom"
import ApplicationStepOneModule from "./step1.module"
import ApplicationStepTwoModule from "./step2.module"
import ApplicationStepThreeModule from "./step3.module"
import ApplicationStepFourModule from "./step4.module"
import ApplicationStepFiveModule from "./step5.module"
import ApplicationStepSixModule from "./step6.module"
import { NotFoundModule } from "../notfound.module"
import { NavigatorComponent } from "../../core/components/navigator.component"
import { Container } from "@material-ui/core"

const StepRouter: React.FC = () => {
  const { params } = useRouteMatch<{ step: string }>()
  const { step } = params
  let component: React.ReactElement
  switch (step) {
    case "1":
      component = <ApplicationStepOneModule />
      break
    case "2":
      component = <ApplicationStepTwoModule step={step} />
      break
    case "3":
      component = <ApplicationStepThreeModule step={step} />
      break
    case "4":
      component = <ApplicationStepFourModule step={step} />
      break
    case "5":
      component = <ApplicationStepFiveModule step={step} />
      break
    case "6":
      component = <ApplicationStepSixModule step={step} />
      break
    default:
      return <NotFoundModule />
  }
  return (
    <>
      <NavigatorComponent step={parseInt(step)} />
      <Container maxWidth="lg">{component}</Container>
    </>
  )
}

export default StepRouter
