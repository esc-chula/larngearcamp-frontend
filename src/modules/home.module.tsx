import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { CoverComponent } from "../core/components/cover.component"

import HomeTitle from "./home/home-title.module"
import HomeLarngearDescription from "./home/home-description.module"
import HomeQualification from "./home/home-qualification.module"
import HomeFooter from "./home/home-footer.module"
import HomeTimeline from "./home/home-timeline.module"
import HomeCarousal from "./home/home-carousel.module"
import HomeAnnouce from "./home/home-annouce.module"

import landing1 from "../assets/images/background/landing-1.svg"
import landing2 from "../assets/images/background/landing-2.svg"
import landing3 from "../assets/images/background/landing-3.svg"
import BackgroundOverlay from "../core/components/backgroundOverlay.component"

import q1 from "../assets/images/icon/qualification-1.svg"
import q2 from "../assets/images/icon/qualification-2.svg"
import q3 from "../assets/images/icon/qualification-3.svg"
import q4 from "../assets/images/icon/qualification-4.svg"
import { Box } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  title: {
    marginTop: "80px"
  },
  description: {
    marginBottom: "80px"
  },
  timeline: {
    marginTop: "80px",
    marginBottom: "80px"
  }
}))

const HomeModule: React.FC = () => {
  const classes = useStyle()

  return (
    <>
      <CoverComponent />
      <BackgroundOverlay src={landing1} aspectRatio={1519 / 832} contentPercentage={70} minHeightPx={800}>
        <HomeTitle className={classes.title} />
      </BackgroundOverlay>

      <HomeLarngearDescription className={classes.description} />

      <HomeCarousal gradientPercent={20} />

      <BackgroundOverlay src={landing2} aspectRatio={1440 / 692} contentPercentage={100} offsetPercentage={37} minHeightPx={1000}>
        <HomeQualification
          qualifications={[
            { description: "กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5\nหรือ ปวช. ปีที่ 1-2", src: q1 },
            { description: "ไม่ป่วยเป็นโรคติดต่อร้ายแรง", src: q2 },
            { description: "สามารถค้างคืนได้ที่คณะวิศวกรรมศาสตร์\nจุฬาลงกรณ์มหาวิทยาลัย ตลอดระยะเวลาจัดค่าย", src: q3 },
            { description: "ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน", src: q4 }
          ]}
        />
      </BackgroundOverlay>

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

      <BackgroundOverlay src={landing3} aspectRatio={1440 / 534} offsetPercentage={10} minHeightPx={400}>
        <Box display="flex" height="100%" alignItems="center" justifyContent="center">
          <HomeAnnouce height="max-content" />
        </Box>
      </BackgroundOverlay>

      <HomeFooter
        contacts={[
          { name: "พี่ไนซ์", tel: "086-172-3955" },
          { name: "พี่จิน", tel: "080-795-3954" },
          { name: "พี่น้ำว้า", tel: "084-903-4486" },
          { name: "พี่มายดี", tel: "084-899-5449" }
        ]}
      />
    </>
  )
}

export { HomeModule }
