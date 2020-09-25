import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"

type BackgroundOverlayProps = {
  src: string
  alt?: string
  aspectRatio: number
  minHeightPx?: number
  objectFit?: string
  objectPosition?: string
  contentPercentage?: number
  offsetPercentage?: number
  disableAutoColor?: boolean
}

const useStyle = makeStyles<Theme, BackgroundOverlayProps>(theme => ({
  backgroundImg: {
    position: "absolute",
    top: props => {
      const or = -(props.offsetPercentage ?? 0) / 100

      return `min(
        ${or / props.aspectRatio} * 100vw,
        ${or * (props.minHeightPx ?? 0)}px
      )`
    },
    left: 0,
    width: "100%",
    zIndex: -1,
    minHeight: props => `${props.minHeightPx ?? 0}px`,
    objectFit: props => (props.objectFit ?? "cover") as any,
    objectPosition: props => props.objectPosition
  },
  contentContainer: {
    width: "100%",
    height: 0,
    paddingBottom: props => {
      const contentPercentage = props.contentPercentage ?? 100
      const minHeightPx = props.minHeightPx ?? 0
      const offsetPercentage = props.offsetPercentage ?? 0

      return `max(
      ${(contentPercentage - offsetPercentage) / props.aspectRatio}%,
      ${((contentPercentage - offsetPercentage) * minHeightPx) / 100}px
    )`
    },
    position: "relative"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: props => (props.disableAutoColor ? "" : theme.palette.primary.contrastText),
    overflow: "hidden"
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
const BackgroundOverlayComponent: React.FC<BackgroundOverlayProps & React.HTMLAttributes<HTMLDivElement>> = props => {
  const {
    src,
    alt,
    aspectRatio,
    contentPercentage,
    offsetPercentage,
    objectPosition,
    disableAutoColor,
    minHeightPx,
    ...rest
  }: BackgroundOverlayProps = props

  const classes = useStyle(props)

  return (
    <div {...rest}>
      <div className={classes.contentContainer}>
        <img src={src} alt={alt} className={classes.backgroundImg} />
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  )
}

export default BackgroundOverlayComponent
