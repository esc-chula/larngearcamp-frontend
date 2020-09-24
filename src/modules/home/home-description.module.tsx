import React from "react"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import HomeContainer, { HomeContainerProps } from "./home-container.module"

const useStyle = makeStyles(theme => ({
  title: {
    fontFamily: "Raleway",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem"
    }
  },
  body: {
    width: "90%",
    marginLeft: "auto",
    fontSize: "1.2rem",
    fontWeight: 300,
    lineHeight: pxToRem(33)
  }
}))

const HomeLarngearDescription: React.FC<HomeContainerProps> = props => {
  const classes = useStyle()
  return (
    <HomeContainer {...props}>
      <Typography variant="h4" align="right" className={classes.title}>
        What is Larngear&nbsp;Camp?
      </Typography>
      <Grid container justify="flex-end">
        <Grid item sm={12} md={12} lg={9}>
          <Typography align="right" className={classes.body} variant="body2">
            ค่ายลานเกียร์เป็นค่ายที่จัดขึ้นในเดือนมกราคมของทุกปี โดยเปิดโอกาสให้นักเรียนระดับชั้น
            มัธยมศึกษาตอนปลายทั่วประเทศที่สนใจศึกษาต่อในสาขาวิศวกรรมศาสตร์ แต่ยังไม่มั่นใจ หรือมีข้อมูล
            ไม่เพียงพอได้เข้ามาสัมผัสการเรียนการสอนในวิชาปฏิบัติการจริงรวมไปถึงการทำกิจกรรมต่าง ๆ ที่สอดแทรก เนื้อหาเกี่ยวกับงานทางวิศวกรรม
            เพื่อเป็นข้อมูลประกอบการตัดสินใจในการเลือกศึกษาต่อในระดับอุดมศึกษา
          </Typography>
        </Grid>
      </Grid>
    </HomeContainer>
  )
}

export default HomeLarngearDescription
