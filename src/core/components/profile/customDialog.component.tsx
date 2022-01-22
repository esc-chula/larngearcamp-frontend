import React, { useState, useRef } from "react"
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Divider,
  IconButton
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import CloseIcon from "@material-ui/icons/Close"
import { useDialogContext } from "../../providers/dialog.provider"
import { ShirtSizeDTO, ValidShirtSize } from "../../models/dto/profile.dto"
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

export interface CustomDialogProps {
  open: boolean
  existingShirtSize: ValidShirtSize
  paymentStatus: FileStatus
  serverFile: DocumentItem
}

const CustomDialog: React.FC<CustomDialogProps> = ({ open, existingShirtSize, paymentStatus, serverFile }) => {
  const classes = useStyles()
  const [shirtSize, setShirtSize] = useState(existingShirtSize)
  const { closeDialog } = useDialogContext()

  const selectedShirtSize = useRef(existingShirtSize)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShirtSize(event.target.value as ValidShirtSize)
  }

  const handleClose = () => {
    closeDialog()
    if (shirtSize !== "" && shirtSize !== selectedShirtSize.current) {
      selectedShirtSize.current = shirtSize
      updateShirtSize(selectedShirtSize.current)
    }
  }

  const updateShirtSize = async (shirtSize: ValidShirtSize) => {
    const partialApplication: ShirtSizeDTO = { shirtSize: shirtSize }
    await ApplicationServiceAPI.updateApplicationPostSubmitAPI(partialApplication)
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
        <UploadPaymentBlock paymentStatus={paymentStatus} serverFile={serverFile} />

        <Divider />

        <Typography variant="h6" className={classes.heading}>
          เลือกไซส์เสื้อ
        </Typography>
        <RadioGroup aria-label="Select shirt size" name="shirt-size-select" onChange={handleRadioChange}>
          <FormControlLabel value="S" control={<Radio color="primary" />} label="Size S (อก 33 นิ้ว / ยาว 25 นิ้ว)" checked={shirtSize === "S"} />
          <FormControlLabel value="M" control={<Radio color="primary" />} label="Size M (อก 36 นิ้ว / ยาว 27 นิ้ว)" checked={shirtSize === "M"} />
          <FormControlLabel value="L" control={<Radio color="primary" />} label="Size L (อก 40 นิ้ว / ยาว 28 นิ้ว)" checked={shirtSize === "L"} />
          <FormControlLabel value="XL" control={<Radio color="primary" />} label="Size XL (อก 44 นิ้ว / ยาว 30 นิ้ว)" checked={shirtSize === "XL"} />
        </RadioGroup>
      </DialogContent>
      <Button variant="contained" className={classes.button} disabled={shirtSize === "" ? true : false} onClick={handleClose}>
        ยืนยัน
      </Button>
    </Dialog>
  )
}

export default CustomDialog
