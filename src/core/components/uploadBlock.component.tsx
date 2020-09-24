import React, { useCallback, useState, useMemo } from "react"
import { Typography, makeStyles, Button } from "@material-ui/core"
import ReplayIcon from "@material-ui/icons/Replay"
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined"
import UploadFileModel from "../models/uploadFile.constant"
import { useFormContext, useWatch } from "react-hook-form"
import { useApplicationContext } from "../providers/application.provider"
import { DocumentItem, isDefaultUrl, friendlyFileName } from "../models/dto/document.dto"

const useStyles = makeStyles(theme => ({
  withIcon: {
    display: "flex",
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
}

const UploadBlockComponent: React.FC<UploadBlockComponentProps> = ({ serverFile, order, name, size, accept, body1, body2 }) => {
  const classes = useStyles()
  const [url, setUrl] = useState("")
  const { register, setError, errors, clearErrors, setValue } = useFormContext()
  const currentFile: FileList | undefined = useWatch({ name: name })
  const { uploadDocument } = useApplicationContext()

  const uploadedFile = useMemo(() => {
    if (isDefaultUrl(serverFile.url)) {
      return null
    }
    return {
      name: friendlyFileName(serverFile.name),
      url: serverFile.url
    }
  }, [serverFile])
  const displayFile =
    (currentFile?.length || 0) > 0
      ? {
          name: currentFile![0].name,
          url
        }
      : uploadedFile

  const uploadFile = useCallback(
    async event => {
      const file: File = event.target.files[0]
      if (size && file.size > size) {
        setError(name, {
          type: "fileSize",
          message: "ขนาดไฟล์ใหญ่เกิน 2MB"
        })
        setValue(`${name}URL`, undefined)
      } else {
        clearErrors(name)
        const formData = new FormData()
        formData.append("file", file)
        const result = await uploadDocument(formData, name)
        setValue(`${name}URL`, result.file.url)
        setUrl(result.file.url)
      }
    },
    [uploadDocument, name, setError, clearErrors, size, setValue]
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
        <Button variant="contained" component="label" color="primary" className={`${classes.upload} ${!!displayFile && classes.warningButton}`}>
          <div className={classes.withIcon}>
            <Typography variant="button">{!!displayFile ? "อัพโหลดอีกครั้ง" : "อัพโหลด"}</Typography>
            {!!displayFile ? <ReplayIcon fontSize="small" /> : <AddToPhotosOutlinedIcon fontSize="small" />}
          </div>
          <input type="file" name={name} style={{ display: "none" }} accept={accept} ref={register} onChange={uploadFile} />
        </Button>
        {!!displayFile && !currentError && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="caption" className={classes.caption} component="div">
              ไฟล์ที่อัพโหลดในขณะนี้ :
            </Typography>
            <Typography className={classes.fit} component="div" variant="caption">
              <a href={displayFile.url} className={classes.fileName} target="_blank" rel="noopener noreferrer">
                {displayFile.name}
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
