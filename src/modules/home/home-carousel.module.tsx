import React from "react"
import Carousel, { ResponsiveType } from "react-multi-carousel"
import { makeStyles, Theme as DefaultTheme, useTheme } from "@material-ui/core/styles"
import "@material-ui/core/"
type Props = {
  gradientPercent: number
  images: { src: string; alt?: string }[]
}

const responsive: (theme: DefaultTheme) => ResponsiveType = theme => ({
  default: {
    breakpoint: {
      min: 0,
      max: 10000
    },
    items: 3
  },
  mid: {
    breakpoint: {
      min: 0,
      max: theme.breakpoints.width("lg")
    },
    items: 1
  }
})

const useStyle = makeStyles<DefaultTheme, Props>(theme => ({
  container: {
    position: "relative"
  },
  cover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: props =>
      `linear-gradient(90deg, rgba(252,252,252,1) 0%, rgba(252,252,252,0) ${props.gradientPercent}%, rgba(252,252,252,0) ${
        100 - props.gradientPercent
      }%, rgba(252,252,252,1) 100%)`,
    zIndex: 1
  }
}))

const arrowStyle = makeStyles(theme => ({
  arrow: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  }
}))
const LeftArrow: React.FC = props => {
  const classes = arrowStyle()
  return <button {...props} className={classes.arrow + " react-multiple-carousel__arrow react-multiple-carousel__arrow--left"} />
}
const RightArrow: React.FC = props => {
  const classes = arrowStyle()
  return <button {...props} className={classes.arrow + " react-multiple-carousel__arrow react-multiple-carousel__arrow--right"} />
}

// TODO
const HomeCarousal: React.FC<Props> = props => {
  const classes = useStyle(props)
  const theme = useTheme()
  return (
    <div className={classes.container}>
      <div className={classes.cover}></div>
      <Carousel infinite centerMode arrows responsive={responsive(theme)} customLeftArrow={<LeftArrow />} customRightArrow={<RightArrow />}>
        {props.images.map(({ src, alt }) => (
          <img src={src} alt={alt} />
        ))}
      </Carousel>
    </div>
  )
}

export default HomeCarousal
