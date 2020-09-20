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

const StepRouter: React.FC = () => {
  const { params } = useRouteMatch<{ step: string }>()
  const { step } = params
  let component: React.ReactElement
  switch (step) {
    case "1":
      component = <ApplicationStepOneModule />
      break
    case "2":
      component = <ApplicationStepTwoModule />
      break
    case "3":
      component = <ApplicationStepThreeModule />
      break
    case "4":
      component = <ApplicationStepFourModule />
      break
    case "5":
      component = <ApplicationStepFiveModule />
      break
    case "6":
      component = <ApplicationStepSixModule />
      break
    default:
      return <NotFoundModule />
  }
  return (
    <>
      <NavigatorComponent step={parseInt(step)} />
      {component}
    </>
  )
}

export default StepRouter
