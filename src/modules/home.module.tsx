import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import HomeTitle from "./home/home-title.module"
import HomeLarngearDescription from "./home/home-description.module"
import HomeQualification from "./home/home-qualification.module"
import HomeFooter from "./home/home-footer.module"
import HomeTimeline from "./home/home-timeline.module"
import HomeCarousel from "./home/home-carousel.module"
import HomeAnnouce from "./home/home-annouce.module"

import contactConstant from "../core/constants/contact.constant"
import timelineConstant from "../core/constants/timeline.constant"
import qualificationsConstant from "../core/constants/qualifications.constant"
import carouselConstant from "../core/constants/carousel.constant"
import HomeGallery from "../core/components/gallery.components"
import galleryConstant from "../core/constants/gallery.constant"

const useStyle = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(10)
  },
  description: {
    marginBottom: theme.spacing(10)
  },
  qualification: {
    marginTop: theme.spacing(35)
  },
  timeline: {
    textAlign: "center",
    marginTop: theme.spacing(10)
  }
}))

const HomeModule: React.FC = () => {
  const classes = useStyle()

  return (
    <>
      <HomeTitle className={classes.title} />
      <HomeLarngearDescription />
      <HomeCarousel autoPlay={true} autoPlaySpeed={3000} swipeable gradientPercent={{ white: 3, fade: 15 }} images={carouselConstant} />
      <HomeQualification className={classes.qualification} qualifications={qualificationsConstant} />
      <HomeTimeline className={classes.timeline} label={timelineConstant} />
      <HomeGallery images={galleryConstant} />
      <HomeAnnouce />
      <HomeFooter contacts={contactConstant} />
    </>
  )
}

export { HomeModule }
