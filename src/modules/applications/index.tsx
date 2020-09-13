import React from "react"

const Step1 = React.lazy(() => import("./step1.module"))
const Step2 = React.lazy(() => import("./step2.module"))
const Step3 = React.lazy(() => import("./step3.module"))
const Step4 = React.lazy(() => import("./step4.module"))
const Step5 = React.lazy(() => import("./step5.module"))
const Step6 = React.lazy(() => import("./step6.module"))

export { Step1, Step2, Step3, Step4, Step5, Step6 }
