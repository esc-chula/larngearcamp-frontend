import React, { useCallback } from "react"
import { useRouteMatch, useHistory, Redirect } from "react-router-dom"
import ApplicationStepOneModule from "./step1.module"
import ApplicationStepTwoModule from "./step2.module"
import ApplicationStepThreeModule from "./step3.module"
import ApplicationStepFourModule from "./step4.module"
import ApplicationStepFiveModule from "./step5.module"
import ApplicationStepSixModule from "./step6.module"
import { NotFoundModule } from "../notfound.module"
import { NavigatorComponent } from "../../core/components/navigator.component"
import { Container } from "@material-ui/core"
import { useApplicationStateContext } from "../../core/providers/applicationState.provider"
import { EditingState } from "../../core/models/dto/application.dto"
import BackgroundComponent from "../../core/components/background.component"

export function useNextStep() {
  const { params } = useRouteMatch<{ step: string }>()
  const step = parseInt(params.step)
  const history = useHistory()
  return useCallback(() => {
    history.push(`/application/step/${step + 1}`)
  }, [history, step])
}

interface Step {
  Component: React.ComponentType
  allowedStates: EditingState[]
}

const steps: Record<string, Step> = {
  "1": {
    Component: ApplicationStepOneModule,
    allowedStates: ["FULL"]
  },
  "2": {
    Component: ApplicationStepTwoModule,
    allowedStates: ["FULL"]
  },
  "3": {
    Component: ApplicationStepThreeModule,
    allowedStates: ["FULL"]
  },
  "4": {
    Component: ApplicationStepFourModule,
    allowedStates: ["FULL"]
  },
  "5": {
    Component: ApplicationStepFiveModule,
    allowedStates: ["FULL", "DOCUMENT_ONLY"]
  },
  "6": {
    Component: ApplicationStepSixModule,
    allowedStates: ["FULL", "DOCUMENT_ONLY"]
  }
}

const StepRouter: React.FC = () => {
  const { params } = useRouteMatch<{ step: string }>()
  const { step } = params
  // const {
  //   application: { editingState }
  // } = useApplicationStateContext()

  if (!steps[step]) {
    return <NotFoundModule />
  }

  const { Component, allowedStates } = steps[step]
  // if (!allowedStates.includes(editingState)) {
  //   switch (editingState) {
  //     case "DOCUMENT_ONLY":
  //       return <Redirect to="/application/step/5" />
  //     case "LOCKED":
  //       return <Redirect to="/application/finish" />
  //   }
  // }

  return (
    <>
      <BackgroundComponent type="bg6" />
      <NavigatorComponent step={parseInt(step)} />
      <Container maxWidth="lg">
        <Component />
      </Container>
    </>
  )
}

export default StepRouter
