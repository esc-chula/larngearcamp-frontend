import React from "react"

const StepRouter = React.lazy(() => import("./stepRouter.module"))
const Finish = React.lazy(() => import("./finish.module"))

export { StepRouter, Finish }
