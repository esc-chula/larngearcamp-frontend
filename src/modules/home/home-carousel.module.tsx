import React from "react"
import Carousel, { CarouselProps, ResponsiveType, ArrowProps } from "react-multi-carousel"
import { makeStyles, Theme as DefaultTheme, useTheme } from "@material-ui/core/styles"
import "@material-ui/core/"
import { safeArea } from "../../core/components/safeArea.component"
interface HomeCarouselProps extends Partial<CarouselProps> {
  gradientPercent: { white: number; fade: number }
  images: { src: string; alt?: string }[]
}

interface ArrowButtonProps extends ArrowProps {
  className?: string
  direction: "left" | "right"
}

const responsiveSetting: (theme: DefaultTheme) => ResponsiveType = theme => ({
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

const useStyle = makeStyles<DefaultTheme, HomeCarouselProps>(theme => ({
  container: {
    position: "relative"
  },
  cover: {
    position: "absolute",
    pointerEvents: "none",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: props =>
      `linear-gradient(
        90deg, 
        #eeeeeeFF 0%,
        #eeeeeeFF ${props.gradientPercent.white}%,
        #eeeeee00 ${props.gradientPercent.white + props.gradientPercent.fade}%,
        #eeeeee00 ${100 - (props.gradientPercent.white + props.gradientPercent.fade)}%,
        #eeeeeeFF ${100 - props.gradientPercent.white}%,
        #eeeeeeFF 100%)
      `,
    zIndex: 1
  },
  img: {
    pointerEvents: "none",
    width: "325px",
    height: "183px",
    objectFit: "cover"
  },
  leftArrow: {
    marginLeft: safeArea.paddingLeft
  },
  rightArrow: {
    marginRight: safeArea.paddingRight
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

const ArrowButton: React.FC<ArrowButtonProps> = ({ className = "", onClick, direction }) => {
  const classes = arrowStyle()
  return (
    <button
      className={`${className} ${classes.arrow} react-multiple-carousel__arrow react-multiple-carousel__arrow--${direction}`}
      onClick={onClick}
    />
  )
}

// TODO
const HomeCarousel: React.FC<HomeCarouselProps> = props => {
  const { gradientPercent, images, ...rest } = props

  const classes = useStyle(props)
  const theme = useTheme()

  return (
    <div className={classes.container}>
      <div className={classes.cover}></div>
      <Carousel
        infinite
        centerMode
        arrows
        responsive={responsiveSetting(theme)}
        customLeftArrow={<ArrowButton className={classes.leftArrow} direction="left" />}
        customRightArrow={<ArrowButton className={classes.rightArrow} direction="right" />}
        {...rest}>
        {props.images.map(({ src, alt }, index) => (
          <img className={classes.img} src={src} alt={alt} key={index} />
        ))}
      </Carousel>
    </div>
  )
}

export default HomeCarousel
