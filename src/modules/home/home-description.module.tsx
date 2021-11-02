import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import { HomeContainerProps } from "./home-container.module"
import { ITheme } from "../../styles/types"
import HomeDescriptionImage from "./home-description-image.module"

const useStyle = makeStyles((theme: ITheme) => ({
  container: {
    display: "flex",
    color: theme.palette.gray[700],
    padding: `${theme.spacing(9)}px min(${theme.spacing(9)}px, 5vw)`,
    justifyContent: "center",
    columnGap: "4vw",
    alignItems: "center",
    backgroundColor: "white",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column-reverse"
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2)
    }
  },
  description: {
    lineHeight: pxToRem(42),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      lineHeight: pxToRem(35),
      marginTop: theme.spacing(2)
    }
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  descriptionContainer: {
    maxWidth: "513px",
    flex: 1,
    [theme.breakpoints.down("lg")]: {
      maxWidth: "80%",
      textAlign: "center",
      marginTop: theme.spacing(4)
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
      marginTop: theme.spacing(2)
    }
  },
  imageContainer: {
    maxWidth: "498px",
    flex: 1
  }
}))

const HomeLarngearDescription: React.FC<HomeContainerProps> = props => {
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <div className={classes.descriptionContainer}>
        <Typography variant="h1" className={classes.title}>
          ค่ายลานเกียร์คืออะไร?
        </Typography>
        <Typography variant="subtitle2" className={classes.description}>
          ค่ายลานเกียร์เป็นค่ายที่จัดขึ้นในเดือนมกราคมของทุกปีโดยเปิดโอกาสให้
          นักเรียนระดับชั้นมัธยมศึกษาตอนปลายทั่วประเทศที่สนใจศึกษาต่อในสาขาวิศวกรรมศาสตร์แต่ยังไม่มั่นใจหรือมีข้อมูลไม่เพียงพอ ได้เข้ามาสัมผัสการ
          เรียนการสอนในวิชาปฏิบัติการจริงรวมไปถึงการทำกิจกรรมต่าง ๆ ที่สอดแทรกเนื้อหาเกี่ยวกับงานทางวิศวกรรมเพื่อเป็นข้อมูลประกอบการ
          ตัดสินใจในการเลือกศึกษาต่อในระดับอุดมศึกษา
        </Typography>
      </div>
      <HomeDescriptionImage />
    </div>
  )
}

export default HomeLarngearDescription
