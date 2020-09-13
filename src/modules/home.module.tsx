import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { CoverComponent } from "../core/components/cover.component"

import HomeTitle from "../core/components/home/home-title.component"
import HomeLarngearDescription from "../core/components/home/home-larngear-description.component"
import HomeQualification from "../core/components/home/home-qualification.component"
import HomeFooter from "../core/components/home/home-footer.component"
import HomeTimeline from "../core/components/home/home-timeline.component"
import HomeCarousal from "../core/components/home/home-carousel.component"
import HomeAnnouce from "../core/components/home/home-annouce.component"

const useStyle = makeStyles(theme => ({
  homeTitleContainer: {
    marginTop: "80px"
  }
}))

const HomeModule: React.FC = () => {
  const classes = useStyle()

  return (
    <>
      <CoverComponent />

      <div className={classes.homeTitleContainer}>
        <HomeTitle />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <HomeLarngearDescription />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/*<HomeCarousal/>*/}
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <HomeQualification
        data={[
          { description: "กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5 หรือ ปวช. ปีที่ 1-2", src: "" },
          { description: "สามารถค้างคืนได้ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ตลอดระยะเวลาจัดค่าย", src: "" },
          { description: "ไม่ป่วยเป็นโรคติดต่อร้ายแรง", src: "" },
          { description: "ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน", src: "" }
        ]}
      />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <HomeTimeline
        label={[
          { left: "18 กันยายน - 10 ตุลาคม 2563", right: "รับสมัคร" },
          { left: "24 ตุลาคม 2563", right: "ประกาศผลผู้มีสิทธิ์สัมภาษณ์" },
          { left: "31 ตุลาคม 2563", right: "สัมภาษณ์รอบกรุงเทพ" },
          { left: "2 - 8 พฤศจิกายน 2563", right: "สัมภาษณ์รอบต่างจังหวัด" },
          { left: "14 พฤศจิกายน 2563", right: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย" },
          { left: "15 พฤศจิกายน - 19 ธันวาคม 2563", right: "ยืนยันสิทธิ์การเข้าร่วมค่าย" }
        ]}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <HomeAnnouce />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

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
