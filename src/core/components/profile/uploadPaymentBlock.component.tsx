import React, { useCallback, useRef, useState } from "react"
import { Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import paymentQR from "../../../assets/images/paymentQR.jpg"
import { FileStatus } from "../../models/dto/application.dto"
import { useApplicationContext } from "../../providers/application.provider"
import { AxiosError } from "axios"
import { DocumentItem } from "../../models/dto/document.dto"
import { useLoadingCallback } from "../loading.component"
import { useAuthContext } from "../../providers/auth.provider"
import MyProfileModel from "../../models/myprofile.models"

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(0.5, 3),
    borderRadius: "10px",
    margin: theme.spacing(1, 0),
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
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
  },
  error: {
    color: theme.palette.primary.main,
    textAlign: "center"
  }
}))

export interface UploadPaymentBlockProps {
  paymentStatus: FileStatus
  serverFile: DocumentItem
}

export interface DisplayedError {
  message: null | string
}

const UploadPaymentBlock: React.FC<UploadPaymentBlockProps> = ({ paymentStatus, serverFile }) => {
  const classes = useStyles()
  const [status, setStatus] = useState(paymentStatus)
  const [displayFile, setDisplayFile] = useState(serverFile)
  const { me } = useAuthContext()
  const { uploadDocument } = useApplicationContext()

  const { documentState } = me.data as MyProfileModel
  const isUpload = documentState.payment === "PASSED" || documentState.payment === "UPLOADED"

  const errorMessage = useRef("")

  const uploadFile = useLoadingCallback(
    useCallback(
      async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File = event.target.files![0]
        if (!file) return
        try {
          if (file.size > 4000000) throw new Error("ไฟล์มีขนาดใหญ่เกิน 4 MB")
          else {
            const formData = new FormData()
            formData.append("file", file)
            formData.append("kind", "PAYMENT")
            try {
              const result = await uploadDocument(formData)
              setStatus(result.status)
              setDisplayFile(result)
              errorMessage.current = ""
            } catch (error) {
              if (!(error as AxiosError).request.responseText) {
                errorMessage.current = "อัปโหลดไม่สำเร็จ กรุณาลองใหม่ด้วยสัญญาณอินเตอร์เน็ตที่เร็วขึ้น หรือเลือกไฟล์ที่มีขนาดเล็กกว่านี้"
              } else {
                errorMessage.current = (error as AxiosError).response?.data.message
              }
            }
          }
        } catch (error) {
          errorMessage.current = (error as Error).message
        }
      },
      [uploadDocument]
    )
  )

  return (
    <div className={classes.paymentContainer}>
      {/* <img src={paymentQR} alt="QR Code" className={classes.image} /> */}
      <Typography variant="subtitle1">ชื่อบัญชี กรรมการนิสิต คณะวิศวกรรมศาสตร์ จุฬาฯ</Typography> {/* TODO: แก้ชื่อบัญชี */}
      <Typography variant="subtitle1">ธนาคารไทยพาณิชย์</Typography> {/* TODO: แก้ชื่อธนาคาร */}
      <Typography variant="subtitle1">เลขบัญชี 045-286444-0</Typography> {/* TODO: แก้เลขบัญชี */}
      <Typography variant="subtitle1">จำนวน 750 บาท</Typography>
      {errorMessage.current !== "" && (
        <Typography variant="subtitle2" component="div" className={classes.error}>
          {errorMessage.current}
        </Typography>
      )}
      <Button variant="outlined" component="label" className={classes.button}>
        {status === "EMPTY" ? "อัปโหลดหลักฐานการชำระเงิน" : "อัปโหลดอีกครั้ง"}
        <input type="file" name="payment" hidden accept="image/jpeg, image/png" onChange={uploadFile} />
      </Button>
      {!!displayFile.url && status !== "EMPTY" && errorMessage.current === "" && (
        <img src={displayFile.url} alt="uploaded preview" className={classes.image} />
      )}
    </div>
  )
}

export default UploadPaymentBlock
