import React from "react"
import Iframe from "react-iframe"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  facebookEmbed: {
    margin: "auto",
    border: "none",
    overflow: "hidden"
  }
}))

const HomeFacebookEmbed: React.FC = props => {
  const classes = useStyle()
  return (
    <React.Fragment>
      <Typography align="center" variant="h2" style={{ margin: "50px 0" }}>
        FOLLOW US
      </Typography>
      <Iframe
        url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThailandIncubator%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500px"
        height="600px"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
        frameBorder={0}
        scrolling="no"
        className={classes.facebookEmbed}
      />
    </React.Fragment>
  )
}

export default HomeFacebookEmbed
