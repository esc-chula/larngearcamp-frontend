import React from "react"
import Iframe from "react-iframe"
import { makeStyles, useTheme } from "@material-ui/styles"
import { Typography, useMediaQuery } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  container: {
    backgroundColor: "white",
    paddingBottom: theme.spacing(6)
  },
  title: {
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  facebookEmbed: {
    color: theme.palette.gray[700],
    border: "none",
    overflow: "auto",
    maxHeight: "600px"
  },
  socialContainer: {
    display: "flex",
    flexWrap: "wrap",
    height: "auto",
    gap: `${theme.spacing(4)}px`,
    justifyContent: "center"
  }
}))
const useFacebookEmbedWidth = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))
  if (isSm) return "300px"
  return "500px"
}
const IGEmbedHeight = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))
  if (isSm) return "410px" //depend on post
  return "550px" //depend on post
}
const HomeFacebookEmbed: React.FC = props => {
  const classes = useStyle()
  const width = useFacebookEmbedWidth()
  const IGHeight = IGEmbedHeight()
  return (
    <div className={classes.container}>
      <Typography align="center" variant="h2" className={classes.title}>
        FOLLOW US
      </Typography>
      <div className={classes.socialContainer}>
        <Iframe
          url={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLARNGEARCAMP%2F&tabs=timeline&width=${width}&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width={`${width}px`}
          height="600px"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen={true}
          frameBorder={0}
          scrolling="no"
          className={classes.facebookEmbed}
        />
        <Iframe
          url={`https://www.instagram.com/p/C_X68__yBoK/embed?img_index=1`}
          width={`${width}px`}
          height={`${IGHeight}px`}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen={true}
          frameBorder={0}
          scrolling="no"
          className={classes.facebookEmbed}
        />
      </div>
    </div>
  )
}

export default HomeFacebookEmbed
