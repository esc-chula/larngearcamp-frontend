import React, { useState, useRef } from "react"
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import CloseIcon from "@material-ui/icons/Close"
import { useDialogContext } from "../../providers/dialog.provider"
import ApplicationServiceAPI from "../../services/application.service"
import { FileStatus } from "../../models/dto/application.dto"
import { DocumentItem } from "../../models/dto/document.dto"
import UploadPaymentBlock from "./uploadPaymentBlock.component"

const useStyles = makeStyles(theme => ({
  dialog: {
    borderRadius: "10px"
  },
  heading: {
    margin: theme.spacing(2, 0)
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
  }
}))

export interface PaymentDialogProps {
  open: boolean
  paymentStatus: FileStatus
  serverFile: DocumentItem
}

const PaymentDialog: React.FC<PaymentDialogProps> = ({ open, paymentStatus, serverFile }) => {
  const classes = useStyles()
  const { closePaymentDialog } = useDialogContext()

  const handleClose = () => {
    closePaymentDialog()
    // if (shirtSize !== "" && shirtSize !== selectedShirtSize.current) {
    //   selectedShirtSize.current = shirtSize
    //   updateShirtSize(selectedShirtSize.current)
    // }
  }

  // const updateShirtSize = async (shirtSize: ValidShirtSize) => {
  //   const partialApplication: ShirtSizeDTO = { shirtSize: shirtSize }
  //   await ApplicationServiceAPI.updateApplicationPostSubmitAPI(partialApplication)
  // }

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
        <UploadPaymentBlock paymentStatus={paymentStatus} serverFile={serverFile} />
      </DialogContent>
      <Button variant="contained" className={classes.button} disabled={paymentStatus === "EMPTY" ? true : false} onClick={handleClose}>
        ยืนยัน
      </Button>
    </Dialog>
  )
}

export default PaymentDialog
