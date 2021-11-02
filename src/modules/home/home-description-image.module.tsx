import { Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React, { useState, useCallback, useEffect } from "react"
import descriptionConstant from "../../core/constants/description.constant"

const useStyles = makeStyles(() => ({
  image: { borderRadius: "10px", width: "100%" },
  imageContainer: {
    maxWidth: "498px",
    flex: 1
  }
}))
const HomeDescriptionImage = () => {
  const classes = useStyles()

  const [index, setIndex] = useState(0)
  const changeImage = useCallback(() => {
    setIndex(index => (index + 1) % descriptionConstant.length)
  }, [])

  const [display, setDisplay] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(false)
      setTimeout(() => {
        changeImage()
      }, 500)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [changeImage])

  useEffect(() => {
    setDisplay(true)
  }, [index])

  return (
    <Fade in={display} timeout={{ enter: 500, exit: 500 }}>
      <div className={classes.imageContainer}>
        <img src={descriptionConstant[index].src} alt="" className={classes.image} />
      </div>
    </Fade>
  )
}

export default HomeDescriptionImage
