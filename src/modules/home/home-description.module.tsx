import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import { HomeContainerProps } from "./home-container.module"
import { ITheme } from "../../styles/types"
import tmp from "../../assets/images/description/tmp.png"

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
      flexDirection: "column-reverse",
      rowGap: `${theme.spacing(4)}px`
    }
  },
  description: { lineHeight: pxToRem(42), marginTop: theme.spacing(4) },
  descriptionContainer: {
    maxWidth: "513px",
    flex: 1,
    [theme.breakpoints.down("lg")]: {
      maxWidth: "80%",
      textAlign: "center"
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
        <Typography variant="h1">ค่ายลานเกียร์คืออะไร?</Typography>
        <Typography variant="subtitle2" className={classes.description}>
          ค่ายลานเกียร์เป็นค่ายที่จัดขึ้นในเดือนมกราคมของทุกปีโดยเปิดโอกาสให้
          นักเรียนระดับชั้นมัธยมศึกษาตอนปลายทั่วประเทศที่สนใจศึกษาต่อในสาขาวิศวกรรมศาสตร์แต่ยังไม่มั่นใจหรือมีข้อมูลไม่เพียงพอ ได้เข้ามาสัมผัสการ
          เรียนการสอนในวิชาปฏิบัติการจริงรวมไปถึงการทำกิจกรรมต่าง ๆ ที่สอดแทรกเนื้อหาเกี่ยวกับงานทางวิศวกรรมเพื่อเป็นข้อมูลประกอบการ
          ตัดสินใจในการเลือกศึกษาต่อในระดับอุดมศึกษา?
        </Typography>
      </div>
      <div className={classes.imageContainer}>
        <img src={tmp} alt="" />
      </div>
    </div>
  )
}

export default HomeLarngearDescription
