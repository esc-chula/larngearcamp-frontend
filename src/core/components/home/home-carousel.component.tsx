import React from "react"
import Carousel, { ResponsiveType } from "react-multi-carousel"
import { makeStyles, Theme as DefaultTheme } from "@material-ui/core/styles"
import "@material-ui/core/"
type Props = {
  gradientPercent: number
}

const responsive: ResponsiveType = {
  all: {
    breakpoint: {
      max: 10000,
      min: 0
    },
    items: 3
    // partialVisibilityGutter: 40,
  }
}

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
    backgroundColor: theme.palette.primary.main
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
  return (
    <div className={classes.container}>
      <div className={classes.cover}></div>
      <Carousel infinite centerMode arrows responsive={responsive} customLeftArrow={<LeftArrow />} customRightArrow={<RightArrow />}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <img src={`https://picsum.photos/325/183?${i}`}></img>
        ))}
      </Carousel>
    </div>
  )
}

export default HomeCarousal
