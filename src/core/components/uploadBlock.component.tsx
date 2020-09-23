import React, { useCallback, useState } from "react"
import { Typography, makeStyles, Button } from "@material-ui/core"
import ReplayIcon from "@material-ui/icons/Replay"
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined"
import UploadFileModel from "../models/uploadFile.constant"
import { useFormContext, useWatch } from "react-hook-form"
import { useApplicationContext } from "../providers/application.provider"

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

const UploadBlockComponent: React.FC<UploadFileModel & { order: number }> = ({ order, name, size, accept, body1, body2 }) => {
  const classes = useStyles()
  const [url, setUrl] = useState("")
  const { register, setError, errors, clearErrors, setValue } = useFormContext()
  const currentFile: FileList | undefined = useWatch({ name: name })
  const { uploadDocument } = useApplicationContext()

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
        setValue(`${name}URL`, result.data.file.url)
        setUrl(result.data.file.url)
      }
    },
    [uploadDocument, name, setError, clearErrors, size, setValue]
  )

  return (
    <div className={classes.container}>
      <Typography variant="body1">{order}</Typography>
      <div className={classes.block}>
        <Typography variant="body1">{body1}</Typography>
        <Typography variant="body2">{body2}</Typography>
        <Button variant="contained" component="label" color="primary" className={`${classes.upload} ${!!currentFile && classes.warningButton}`}>
          <div className={classes.withIcon}>
            <Typography variant="button">{!!currentFile ? "อัพโหลดอีกครั้ง" : "อัพโหลด"}</Typography>
            {!!currentFile ? <ReplayIcon fontSize="small" /> : <AddToPhotosOutlinedIcon fontSize="small" />}
          </div>
          <input type="file" name={name} style={{ display: "none" }} accept={accept} ref={register} onChange={uploadFile} />
        </Button>
        {!!currentFile && !errors[name] && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="caption" className={classes.caption} component="div">
              ไฟล์ที่อัพโหลดในขณะนี้ :
            </Typography>
            <Typography className={classes.fit} component="div" variant="caption">
              <a href={url} className={classes.fileName} target="_blank" rel="noopener noreferrer">
                {currentFile[0]?.name}
              </a>
            </Typography>
          </div>
        )}
        {errors[name] && (
          <Typography variant="caption" color="error" className={classes.caption} component="div">
            {errors[name].message}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default UploadBlockComponent
