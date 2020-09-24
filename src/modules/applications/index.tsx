import React from "react"

const StepRouterModule = React.lazy(() => import("./stepRouter.module"))
const FinishModule = React.lazy(() => import("./finish.module"))

export { StepRouterModule, FinishModule }
