import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"

type Props = {
  src: string
  aspectRatio: number
  contentPercentage?: number
  offsetPercentage?: number
  disableAutoColor?: boolean
}

const useStyle = makeStyles<Theme, Props>(theme => ({
  backgroundImg: {
    zIndex: -1,
    width: "100%",
    position: "absolute"
  },
  contentContainer: {
    width: "100%",
    height: 0,
    paddingTop: props => `${(props.contentPercentage || 100) / props.aspectRatio}%`,
    position: "relative"
  },
  content: {
    position: "absolute",
    top: props => `${props.offsetPercentage || 0}%`,
    left: 0,
    width: "100%",
    height: "100%",
    color: props => (props.disableAutoColor ? "" : theme.palette.primary.contrastText),
    overflowY: "auto"
  }
}))

/**
 * Component, Image with content (child elements) overlayed on top
 *
 * src: Image source, like in <img>
 *
 * aspectRatio: Image aspect ratio, use for content alignment
 *
 * contentPercentage: percentage of content height will be (with respected to image height),
 * note that other element are only effected by content height
 */
const BackgroundOverlay: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = props => {
  const classes = useStyle(props)

  return (
    <div {...props}>
      <img src={props.src} className={classes.backgroundImg} />
      <div className={classes.contentContainer}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  )
}

export default BackgroundOverlay
