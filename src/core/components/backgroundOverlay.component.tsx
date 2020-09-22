import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Box, BoxProps } from "@material-ui/core"

type Props = {
  src: string
  alt?: string
  aspectRatio: number
  minHeightPx?: number
  objectFit?: string
  contentPercentage?: number
  offsetPercentage?: number
  disableAutoColor?: boolean
}

const useStyle = makeStyles<Theme, Props>(theme => ({
  backgroundImg: {
    zIndex: -1,
    width: "100%",
    position: "absolute",
    minHeight: props => `${props.minHeightPx ?? 0}px`,
    objectFit: props => (props.objectFit ?? "cover") as any
  },
  contentContainer: {
    width: "100%",
    height: 0,
    paddingTop: props => {
      const contentPercentage = props.contentPercentage ?? 100
      const contentRatio = contentPercentage / 100
      const minHeightPx = props.minHeightPx ?? 0

      return `max(
      ${contentPercentage / props.aspectRatio}%,
      ${contentRatio * minHeightPx}px
    )`
    },
    position: "relative"
  },
  content: {
    position: "absolute",
    top: props => `${props.offsetPercentage ?? 0}%`,
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
const BackgroundOverlay: React.FC<Props & BoxProps> = props => {
  const { src, alt, aspectRatio, contentPercentage, offsetPercentage, disableAutoColor, minHeightPx, ...rest }: Props = props

  const classes = useStyle(props)

  return (
    <Box {...rest}>
      <img src={src} alt={alt} className={classes.backgroundImg} />
      <div className={classes.contentContainer}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </Box>
  )
}

export default BackgroundOverlay
