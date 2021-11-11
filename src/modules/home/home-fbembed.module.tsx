import React from "react"
import Iframe from "react-iframe"
import { makeStyles, useTheme } from "@material-ui/styles"
import { Typography, useMediaQuery } from "@material-ui/core"
import { ITheme } from "../../styles/types"

const useStyle = makeStyles((theme: ITheme) => ({
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
    margin: "auto",
    border: "none",
    overflow: "hidden"
  }
}))
const useFacebookEmbedWidth = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))
  if (isSm) return "300px"
  return "500px"
}
const HomeFacebookEmbed: React.FC = props => {
  const classes = useStyle()
  const width = useFacebookEmbedWidth()
  return (
    <div className={classes.container}>
      <Typography align="center" variant="h2" className={classes.title}>
        FOLLOW US
      </Typography>
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
    </div>
  )
}

export default HomeFacebookEmbed
