import React, { useState } from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

interface IImage {
  src: string
  topic: string
  description: string
  alt?: string
}

interface HomeGalleryProps {
  images: IImage[]
}

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(4, 0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(5, 0)
  },
  contentDiv: {
    display: "flex",
    height: "fit-content"
  },
  descriptionRoot: {
    display: "flex",
    marginLeft: theme.spacing(8),
    justifyContent: "space-between",
    flexDirection: "column",
    maxWidth: "450px"
  },
  imageTopic: {
    display: "flex",
    marginBottom: theme.spacing(2)
  },
  image: {
    width: "100%",
    maxWidth: "450px",
    height: "auto",
    borderRadius: "20px"
  },
  button: {
    padding: theme.spacing(1, 6),
    "&>*": {
      fontSize: "1.1rem"
    },
    "&:disabled": {
      backgroundColor: grey[400],
      color: grey[200]
    }
  },
  galleryHeader: {
    marginBottom: theme.spacing(5)
  },
  description: {
    fontWeight: 300
  }
}))

const HomeGallery: React.FC<HomeGalleryProps> = props => {
  const { images } = props

  const [index, setIndex] = useState(1)
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.galleryHeader}>
        Gallery
      </Typography>
      {images.map(({ src }, key) => (
        <div key={key} className={classes.contentDiv} style={{ display: key !== index ? "none" : "flex" }}>
          <img className={classes.image} src={(src as unknown) as string} alt="Hello" />
          <div className={classes.descriptionRoot}>
            <div>
              <div className={classes.imageTopic}>
                <Typography variant="h5">ค่ายที่ไม่เหมือนใคร และไม่มีใครเหมือน !</Typography>
              </div>
              <Typography variant="h6" className={classes.description}>
                หากน้อง ๆ มีความฝันและอยากมาร่วมสัมผัสบรรยากาศของวิศวฯ จุฬาฯ โดยตรง ค่ายลานเกียร์ยินดีต้อนรับน้อง ๆ ทุกคนเข้าสู่บ้านของเรา อย่ารอช้า !
                ประสบการณ์และความสนุกอันล้ำค่ากำลังรออยู่ :3
              </Typography>
            </div>
            <Button variant="contained" color="primary" className={classes.button}>
              สมัครเลย! วันนี้ - 18 ตุลา 2021
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeGallery
