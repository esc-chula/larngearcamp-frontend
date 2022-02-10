import React, { useState, useRef } from "react"
import { Button, Checkbox, Dialog, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import CloseIcon from "@material-ui/icons/Close"
import { useDialogContext } from "../../providers/dialog.provider"
import ApplicationServiceAPI from "../../services/application.service"
import { FileStatus } from "../../models/dto/application.dto"
import { DocumentItem } from "../../models/dto/document.dto"
import UploadPaymentBlock from "./uploadPaymentBlock.component"
import { OptionsDTO } from "../../models/dto/profile.dto"

const useStyles = makeStyles(theme => ({
  dialog: {
    borderRadius: "10px"
  },
  closeButton: {
    position: "absolute",
    right: 8,
    top: 8,
    color: "#8C8C8C" //theme.palette.gray[300]
  },
  button: {
    padding: theme.spacing(0.5, 3),
    borderRadius: "10px",
    margin: theme.spacing(2, 3),
    color: "white",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark
    }
  },
  redText: {
    color: theme.palette.primary.main
  },
  checkboxContainer: {
    display: "flex"
  },
  checkbox: {
    margin: theme.spacing(0.5, 0)
  }
}))

export interface PaymentDialogProps {
  open: boolean
  paymentStatus: FileStatus
  serverFile: DocumentItem
  accommodationRequested: boolean
  breakfastRequested: boolean
}

const PaymentDialog: React.FC<PaymentDialogProps> = ({ open, paymentStatus, serverFile, accommodationRequested, breakfastRequested }) => {
  const classes = useStyles()
  const [options, setOptions] = useState({ accommodationRequested: accommodationRequested, breakfastRequested: breakfastRequested })
  const { closePaymentDialog } = useDialogContext()

  const selectedOptions = useRef({ accommodationRequested: accommodationRequested, breakfastRequested: breakfastRequested })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      [event.target.name]: event?.target.checked
    })
  }

  const handleClose = () => {
    closePaymentDialog()
    if (options !== selectedOptions.current) {
      selectedOptions.current = options
      updateOptions(selectedOptions.current)
    }
  }

  const updateOptions = async (options: OptionsDTO) => {
    await ApplicationServiceAPI.updateApplicationPostSubmitAPI(options)
  }

  return (
    <Dialog open={open} classes={{ paper: classes.dialog }} onBackdropClick={handleClose}>
      <DialogTitle>
        ชำระค่าใช้จ่าย
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          สแกน QR Code เพื่อชำระค่าใช้จ่ายด้วย Mobile Banking Application จากนั้นอัพโหลดหลักฐานการชำระเงินขึ้นสู่ระบบ
        </DialogContentText>
        <FormGroup className={classes.checkboxContainer}>
          <FormControlLabel
            name="accommodationRequested"
            className={classes.checkbox}
            control={<Checkbox color="primary" onChange={handleChange} />}
            label={
              <>
                ประสงค์จะให้ทางค่ายจัดหาที่พักให้
                <div className={classes.redText}>(มีค่าใช้จ่ายเพิ่ม xxx บาท)</div>
              </>
            }
            checked={options.accommodationRequested}
          />
          <FormControlLabel
            name="breakfastRequested"
            className={classes.checkbox}
            control={<Checkbox color="primary" onChange={handleChange} />}
            label="ประสงค์จะให้ทางค่ายจัดเตรียมอาหารเช้า (ไม่มีค่าใช้จ่ายเพิ่มเติม)"
            checked={options.breakfastRequested}
          />
        </FormGroup>
        <UploadPaymentBlock accomodation={options.accommodationRequested} paymentStatus={paymentStatus} serverFile={serverFile} />
      </DialogContent>
      <Button variant="contained" className={classes.button} disabled={paymentStatus === "EMPTY" ? true : false} onClick={handleClose}>
        ยืนยัน
      </Button>
    </Dialog>
  )
}

export default PaymentDialog
