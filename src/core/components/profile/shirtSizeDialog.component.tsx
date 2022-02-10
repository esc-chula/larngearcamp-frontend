import React, { useState, useRef } from "react"
import { Button, Dialog, DialogContent, DialogTitle, RadioGroup, Radio, FormControlLabel, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import CloseIcon from "@material-ui/icons/Close"
import { useDialogContext } from "../../providers/dialog.provider"
import { OptionsDTO, ValidShirtSize } from "../../models/dto/profile.dto"
import ApplicationServiceAPI from "../../services/application.service"

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
  }
}))

export interface ShirtSizeDialogProps {
  open: boolean
  existingShirtSize: ValidShirtSize
}

const ShirtSizeDialog: React.FC<ShirtSizeDialogProps> = ({ open, existingShirtSize }) => {
  const classes = useStyles()
  const [shirtSize, setShirtSize] = useState(existingShirtSize)
  const { closeShirtSizeDialog } = useDialogContext()

  const selectedShirtSize = useRef(existingShirtSize)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShirtSize(event.target.value as ValidShirtSize)
  }

  const handleClose = () => {
    closeShirtSizeDialog()
    if (shirtSize !== "" && shirtSize !== selectedShirtSize.current) {
      selectedShirtSize.current = shirtSize
      updateShirtSize(selectedShirtSize.current)
    }
  }

  const updateShirtSize = async (shirtSize: ValidShirtSize) => {
    const partialApplication: OptionsDTO = { shirtSize: shirtSize }
    await ApplicationServiceAPI.updateApplicationPostSubmitAPI(partialApplication)
  }

  return (
    <Dialog open={open} classes={{ paper: classes.dialog }} onBackdropClick={handleClose}>
      <DialogTitle>
        เลือกไซส์เสื้อ
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
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

export default ShirtSizeDialog
