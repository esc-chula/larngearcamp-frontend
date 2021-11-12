import React, { useCallback, useMemo } from "react"
import { Typography, makeStyles, Button } from "@material-ui/core"
import ReplayIcon from "@material-ui/icons/Replay"
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined"
import UploadFileModel from "../models/uploadFile.model"
import { useFormContext } from "react-hook-form"
import { useApplicationContext } from "../providers/application.provider"
import { DocumentItem, isDefaultUrl, friendlyFileName } from "../models/dto/document.dto"
import { useApplicationStateContext } from "../providers/applicationState.provider"
import { useLoadingCallback } from "./loading.component"
import { useAuthContext } from "../providers/auth.provider"
import { useGlobalContext } from "../providers/global.provider"
import { AxiosError } from "axios"
import { FileStatus } from "../models/dto/application.dto"

const useStyles = makeStyles(theme => ({
  withIcon: {
    display: "flex",
    alignItems: "center",
    "&>*:first-child": {
      marginRight: theme.spacing(1)
    }
  },
  upload: {
    marginTop: theme.spacing(2),
    maxWidth: 300
  },
  container: {
    display: "flex",
    marginBottom: theme.spacing(2)
  },
  block: {
    marginLeft: theme.spacing(2)
  },
  caption: {
    marginTop: theme.spacing(1)
  },
  fileName: {
    marginTop: theme.spacing(1),
    fontWeight: "bold",
    width: "fit-content",
    color: theme.palette.success.main,
    "&:after": {
      background: theme.palette.success.main
    }
  },
  warningButton: {
    background: theme.palette.warning.main,
    "&:hover": {
      background: theme.palette.warning.dark
    }
  },
  fit: {
    margin: theme.spacing(1, 0, 0, 2),
    width: "fit-content",
    height: "fit-content"
  }
}))

type UploadBlockComponentProps = UploadFileModel & {
  serverFile: DocumentItem
  order: number
  disabled?: boolean
  status: FileStatus
}

const UploadBlockComponent: React.FC<UploadBlockComponentProps> = ({ serverFile, order, name, status, size, accept, body1, body2, disabled }) => {
  const classes = useStyles()
  const { register, setError, errors, clearErrors, setValue } = useFormContext()
  const { uploadDocument } = useApplicationContext()
  const { mutateApplication } = useApplicationStateContext()
  const {
    me: { mutate: mutateMe }
  } = useAuthContext()
  const { activeSnackBar } = useGlobalContext()

  const displayFile = useMemo(() => {
    if (isDefaultUrl(serverFile.url)) {
      return null
    }
    return {
      originalName: serverFile.originalName,
      url: serverFile.url
    }
  }, [serverFile])

  const uploadFile = useLoadingCallback(
    useCallback(
      async event => {
        const file: File = event.target.files[0]
        if (size && file.size > size) {
          setError(name, {
            type: "fileSize",
            message: "ขนาดไฟล์ใหญ่เกิน 4MB"
          })
          setValue(`${name}URL`, undefined)
        } else {
          clearErrors(name)
          clearErrors(`${name}URL`)
          const formData = new FormData()
          formData.append("file", file)
          if (name === "parentalConsent") {
            formData.append("kind", "PARENTAL_CONSENT")
          } else {
            formData.append("kind", name.toUpperCase())
          }
          try {
            const result = await uploadDocument(formData)
            mutateApplication(application => ({ ...application, [name]: result }), false)
            if (name === "photo") {
              mutateMe(me => {
                return { ...me, picture: result.url, documentState: { ...me.documentState, [name]: result.status } }
              }, false)
            } else {
              mutateMe(me => {
                return { ...me, documentState: { ...me.documentState, [name]: result.status } }
              }, false)
            }
            setValue(`${name}URL`, result.url)
          } catch (error) {
            activeSnackBar({
              type: "error",
              message: (error as AxiosError).response?.data.message
            })
          }
        }
      },
      [uploadDocument, name, setError, clearErrors, size, setValue, mutateApplication, mutateMe, activeSnackBar]
    )
  )

  const fileError = errors[name]
  const urlError = errors[`${name}URL`]
  const currentError = fileError || urlError

  return (
    <div className={classes.container}>
      <Typography variant="body1">{order}</Typography>
      <div className={classes.block}>
        <Typography variant="body1">{body1}</Typography>
        <Typography variant="body2">{body2}</Typography>
        <Button
          variant="contained"
          component="label"
          color="primary"
          disabled={disabled}
          className={`${classes.upload} ${!!displayFile && classes.warningButton}`}>
          <div className={classes.withIcon}>
            <Typography variant="button">{status !== "EMPTY" ? "อัพโหลดอีกครั้ง" : "อัพโหลด"}</Typography>
            {status !== "EMPTY" ? <ReplayIcon fontSize="small" /> : <AddToPhotosOutlinedIcon fontSize="small" />}
          </div>
          <input type="file" name={name} style={{ display: "none" }} accept={accept} ref={register} onChange={uploadFile} />
        </Button>
        {!!displayFile && status !== "EMPTY" && !currentError && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="caption" className={classes.caption} component="div">
              ไฟล์ที่อัพโหลดในขณะนี้ :
            </Typography>
            <Typography className={classes.fit} component="div" variant="caption">
              <a href={displayFile.url} className={classes.fileName} target="_blank" rel="noopener noreferrer">
                {displayFile.originalName}
              </a>
            </Typography>
          </div>
        )}
        {currentError && (
          <Typography variant="caption" color="error" className={classes.caption} component="div">
            {currentError.message}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default UploadBlockComponent
