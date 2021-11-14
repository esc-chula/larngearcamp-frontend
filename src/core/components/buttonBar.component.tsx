import React, { useMemo } from "react"
import { useRouteMatch, useHistory } from "react-router-dom"
import { Grid, Button } from "@material-ui/core"
import { useLoadingStatus } from "./loading.component"
import { useApplicationStateContext } from "../providers/applicationState.provider"

export type ButtonBarProps = {
  beforeNavigate?: () => boolean | Promise<boolean>
}

const ButtonBar: React.FC<ButtonBarProps> = ({ beforeNavigate }) => {
  const step = parseInt(useRouteMatch<{ step: string }>().params.step)
  const history = useHistory()
  const previousPage = `/application/step/${step - 1}`
  const nextPage = `/application/step/${step + 1}`
  const setLoading = useLoadingStatus()
  const { application } = useApplicationStateContext()

  const wrappedBeforeNavigate = useMemo(() => {
    if (!beforeNavigate) return null
    return async () => {
      try {
        setLoading(true)
        return await beforeNavigate()
      } finally {
        setLoading(false)
      }
    }
  }, [beforeNavigate, setLoading])

  const getConfirmation = () => {
    return window.confirm("ระบบยังไม่บันทึกข้อมูล คุณต้องการออกจากหน้านี้ใช่หรือไม่")
  }

  const handlePrevious = () => {
    if (getConfirmation()) {
      history.push(previousPage)
    }
  }

  const handleNext = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const whiteList = ["/application/step/1", "/application"]
    let confirmation
    if (whiteList.indexOf(history.location.pathname) >= 0) confirmation = true
    else confirmation = getConfirmation()

    if (confirmation && wrappedBeforeNavigate) {
      event.preventDefault()
      if (await wrappedBeforeNavigate()) {
        history.push(nextPage)
      }
    }
  }

  const showBothButtons = application.state !== "SUBMITTED" || step > 5

  return (
    <Grid container spacing={2}>
      {showBothButtons && (
        <Grid xs={12} sm={6} item>
          <Button variant="outlined" color="primary" fullWidth onClick={handlePrevious}>
            {step === 6 ? "กลับไปแก้ไขหน้าที่แล้ว" : "ย้อนกลับ"}
          </Button>
        </Grid>
      )}
      <Grid xs={12} sm={showBothButtons ? 6 : 12} item>
        <Button variant="contained" color="primary" fullWidth type="submit" onClick={handleNext}>
          {application.state === "SUBMITTED" ? "ยืนยันการแก้ไข" : step === 6 ? "ยืนยันการสมัคร" : "ไปขั้นตอนถัดไป"}
        </Button>
      </Grid>
    </Grid>
  )
}

export default ButtonBar
