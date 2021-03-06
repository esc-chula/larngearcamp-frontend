import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import HomeTitle from "./home/home-title.module"
import HomeLarngearDescription from "./home/home-description.module"
import HomeQualification from "./home/home-qualification.module"
import HomeFooter from "./home/home-footer.module"
import HomeTimeline from "./home/home-timeline.module"

import contactConstant from "../core/constants/contact.constant"
import timelineConstant from "../core/constants/timeline.constant"
import qualificationsConstant from "../core/constants/qualifications.constant"
import HomeGallery from "../core/components/gallery.components"
import galleryConstant from "../core/constants/gallery.constant"
import HomeFacebookEmbed from "./home/home-fbembed.module"

const useStyle = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(10)
  },
  description: {
    marginBottom: theme.spacing(10)
  },
  qualification: {
    marginTop: theme.spacing(35)
  }
}))

const HomeModule: React.FC = () => {
  const classes = useStyle()

  return (
    <>
      <HomeTitle className={classes.title} />
      <HomeLarngearDescription />
      <HomeQualification className={classes.qualification} qualifications={qualificationsConstant} />
      <HomeTimeline label={timelineConstant} />
      <HomeGallery images={galleryConstant} />
      <HomeFacebookEmbed />
      <HomeFooter contacts={contactConstant} />
    </>
  )
}

export { HomeModule }
