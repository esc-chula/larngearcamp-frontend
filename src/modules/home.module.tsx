import React from "react"
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { CoverComponent } from "../core/components/cover.component"

import HomeTitle from "./home/home-title.module"
import HomeLarngearDescription from "./home/home-description.module"
import HomeQualification from "./home/home-qualification.module"
import HomeFooter from "./home/home-footer.module"
import HomeTimeline from "./home/home-timeline.module"
import HomeCarousal from "./home/home-carousel.module"
import HomeAnnouce from "./home/home-annouce.module"

import q1 from "../assets/images/icon/qualification-1.svg"
import q2 from "../assets/images/icon/qualification-2.svg"
import q3 from "../assets/images/icon/qualification-3.svg"
import q4 from "../assets/images/icon/qualification-4.svg"

import c1 from "../assets/images/carousel/1.png"
import c2 from "../assets/images/carousel/2.jpg"
import c3 from "../assets/images/carousel/3.jpg"

import { theme } from "../styles/theme"

const useStyle = makeStyles(() => ({
  title: {
    marginTop: "80px"
  },
  description: {
    marginBottom: "80px"
  },
  qualification: {
    marginTop: "280px"
  },
  timeline: {
    marginTop: "80px"
  }
}))

const homeTheme = createMuiTheme({
  ...theme,
  typography: {
    ...theme.typography,
    h6: {
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em"
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.75rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em"
    },
    body2: {
      fontWeight: 300,
      fontSize: "1.5rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em"
    }
  }
})

const HomeModule: React.FC = () => {
  const classes = useStyle()

  return (
    <ThemeProvider theme={homeTheme}>
      <CoverComponent />
      <HomeTitle className={classes.title} />

      <HomeLarngearDescription className={classes.description} />

      <HomeCarousal gradientPercent={{ white: 3, fade: 15 }} images={[{ src: c1 }, { src: c2 }, { src: c3 }]} />

      <HomeQualification
        className={classes.qualification}
        qualifications={[
          { description: "กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5\nหรือ ปวช. ปีที่ 1-2", src: q1 },
          { description: "ไม่ป่วยเป็นโรคติดต่อร้ายแรง", src: q2 },
          { description: "สามารถค้างคืนได้ที่คณะวิศวกรรมศาสตร์\nจุฬาลงกรณ์มหาวิทยาลัย\tตลอดระยะเวลาจัดค่าย", src: q3 },
          { description: "ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน", src: q4 }
        ]}
      />

      <HomeTimeline
        className={classes.timeline}
        label={[
          { left: "18 กันยายน - 10 ตุลาคม 2563", right: "รับสมัคร" },
          { left: "24 ตุลาคม 2563", right: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์" },
          { left: "31 ตุลาคม 2563", right: "สัมภาษณ์รอบกรุงเทพ" },
          { left: "2 - 8 พฤศจิกายน 2563", right: "สัมภาษณ์รอบต่างจังหวัด" },
          { left: "14 พฤศจิกายน 2563", right: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย" },
          { left: "15 พฤศจิกายน - 19 ธันวาคม 2563", right: "ยืนยันสิทธิ์การเข้าร่วมค่าย" }
        ]}
      />

      <HomeAnnouce />

      <HomeFooter
        contacts={[
          { name: "พี่ไนซ์", tel: "086-172-3955" },
          { name: "พี่จิน", tel: "080-795-3954" },
          { name: "พี่น้ำว้า", tel: "084-903-4486" },
          { name: "พี่มายดี", tel: "084-899-5449" }
        ]}
      />
    </ThemeProvider>
  )
}

export { HomeModule }
