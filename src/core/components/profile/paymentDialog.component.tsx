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
import { useAuthContext } from "../../providers/auth.provider"
import MyProfileModel from "../../models/myprofile.models"

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
    display: "flex",
    marginBottom: theme.spacing(1.5)
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
  const { me } = useAuthContext()

  const { documentState } = me.data as MyProfileModel

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
          โปรดชำระค่าใช้จ่ายมาที่บัญชีด้านล่าง จากนั้นอัปโหลดหลักฐานการชำระเงินขึ้นสู่ระบบ
          {/* สแกน QR Code เพื่อชำระค่าใช้จ่ายด้วย Mobile Banking Application จากนั้นอัปโหลดหลักฐานการชำระเงินขึ้นสู่ระบบ */}
        </DialogContentText>
        {/* <FormGroup className={classes.checkboxContainer}>
          <FormControlLabel
            name="accommodationRequested"
            className={classes.checkbox}
            control={<Checkbox color="primary" onChange={handleChange} />}
            label={
              <>
                ประสงค์จะให้ทางค่ายจัดหาที่พักให้
                <span className={classes.redText}> (มีค่าใช้จ่ายเพิ่มเติม 1,350 บาท อยู่ใกล้คณะ มีพี่ค่ายไปรับ-ส่ง พักห้องละ 2-3 คน)</span>
              </>
            }
            checked={options.accommodationRequested}
            disabled={isUploadPassed}
          />
          <FormControlLabel
            name="breakfastRequested"
            className={classes.checkbox}
            control={<Checkbox color="primary" onChange={handleChange} />}
            label="ประสงค์ที่จะรับประทานอาหารเช้ากับทางค่าย"
            checked={options.breakfastRequested}
          />
        </FormGroup>
        <DialogContentText>
          ค่ายลานเกียร์เล็งเห็นถึงและให้ความสำคัญเรื่องปัญหาขยะ ดังนั้น เพื่อเป็นการลดการเกิด Food Waste
          ทางค่ายจึงได้มีการจัดเตรียมจำนวนอาหารเช้าให้พอดีกับจำนวนของน้อง ๆ ที่มีความประสงค์ที่ต้องการรับประทานอาหารเช้าของทุกวัน
        </DialogContentText>
        <DialogContentText>
          โดยหากน้อง ๆ ไม่มีความประสงค์ที่จะรับประทานอาหารเช้าที่ค่าย น้องสามารถทานอาหารเช้ามาก่อนได้จากที่บ้าน และมาลงทะเบียนตามเวลาที่กำหนด
          ก่อนที่กิจกรรมแรกของแต่ละวันจะเริ่มต้นขึ้น ซึ่งจะมีการชี้แจงวันเวลาในการจัดกิจกรรมค่ายต่อไป
        </DialogContentText> */}
        <UploadPaymentBlock paymentStatus={paymentStatus} serverFile={serverFile} />
      </DialogContent>
      <Button variant="contained" className={classes.button} onClick={handleClose}>
        ยืนยัน
      </Button>
    </Dialog>
  )
}

export default PaymentDialog
