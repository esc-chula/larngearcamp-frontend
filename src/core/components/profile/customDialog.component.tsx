import React, { useState } from "react"
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
  Divider
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import paymentQR from "../../../assets/images/paymentQR.jpg"
import { useDialogContext } from "../../providers/dialog.provider"
import { ValidShirtSize } from "../../models/dto/profile.dto"

const useStyles = makeStyles(theme => ({
  dialog: {
    borderRadius: "10px"
  },
  heading: {
    margin: theme.spacing(2, 0)
  },
  button: {
    padding: theme.spacing(0.5, 3),
    borderRadius: "10px"
  },
  upload: {
    marginTop: theme.spacing(1),
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  },
  dialogAction: {
    margin: theme.spacing(2, 3),
    color: "white",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark
    }
  },
  image: {
    maxWidth: "400px",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "250px"
    }
  },
  paymentContainer: {
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}))

export interface CustomDialogProps {
  open: boolean
  selectedShirtSize: ValidShirtSize
}

const CustomDialog: React.FC<CustomDialogProps> = ({ open, selectedShirtSize }) => {
  const classes = useStyles()
  const [shirtSize, setShirtSize] = useState(selectedShirtSize)
  const { closeDialog } = useDialogContext()

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShirtSize(event.target.value as ValidShirtSize)
  }

  // TODO : handle backdrop click in different cases? (shirtSize selected/not selected)

  return (
    <Dialog open={open} classes={{ paper: classes.dialog }} onBackdropClick={closeDialog}>
      <DialogTitle>ชำระค่าใช้จ่าย</DialogTitle>
      <DialogContent>
        <DialogContentText>
          แสกน QR Code เพื่อชำระค่าใช้จ่ายด้วย Mobile Banking Application จากนั้นอัพโหลดหลักฐานการชำระเงินขึ้นสู่ระบบ
        </DialogContentText>
        <div className={classes.paymentContainer}>
          <img src={paymentQR} alt="QR Code" className={classes.image} />
          <Typography variant="subtitle1">จำนวน 500 บาท</Typography>
          <Button variant="outlined" className={`${classes.button} ${classes.upload}`}>
            อัพโหลดหลักฐานการชำระเงิน
          </Button>
        </div>

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
      <Button
        variant="contained"
        className={`${classes.button} ${classes.dialogAction}`}
        disabled={shirtSize === "" ? true : false}
        onClick={closeDialog}>
        ยืนยัน
      </Button>
    </Dialog>
  )
}

// TODO : handle select shirtSize
// TODO : handle upload payment
// TODO : If size already exists in application, select that, and only call API if value changed

export default CustomDialog
