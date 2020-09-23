import React, { useEffect, useRef, useState } from "react"
import { Typography, Avatar, useTheme, useMediaQuery, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../utils/conversion"
import HomeContainer, { HomeContainerProps } from "./home-container.module"

import landing2 from "../../assets/images/background/landing-2.svg"
import BackgroundOverlay from "../../core/components/backgroundOverlay.component"

const useStyle = makeStyles(theme => ({
  title: {
    fontWeight: 400,
    fontSize: "48px",
    textDecoration: "underline",
    lineHeight: pxToRem(72),
    marginBottom: "40px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px 0"
  }
}))

type Qualification = { description: string; src: string }
const HomeQualification: React.FC<
  {
    qualifications: Qualification[]
  } & HomeContainerProps
> = props => {
  const classes = useStyle()

  const [width, setWidth] = useState(0)

  const theme = useTheme()
  const isSmall = useMediaQuery<Theme>(theme.breakpoints.down(width + 64))

  const leftsRef = useRef<(HTMLDivElement | null)[]>([])
  const rightsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const allToMaxWidth = (elements: HTMLElement[]) => {
      const maxWidth = elements.map(ele => ele?.clientWidth ?? 0).reduce((acc, w) => (w > acc ? w : acc), 0)

      elements.forEach(ele => (ele.style.width = `${maxWidth}px`))
      return maxWidth
    }

    const w1 = allToMaxWidth(leftsRef.current.filter(x => x !== null) as HTMLDivElement[])
    const w2 = allToMaxWidth(rightsRef.current.filter(x => x !== null) as HTMLDivElement[])
    setWidth(w1 + w2)
  })

  const items = Array.from(Array(props.qualifications.length / 2).keys())
    .map(i => 2 * i)
    .map(i => {
      const [left, right] = [props.qualifications[i], props.qualifications[i + 1]]

      return (
        <React.Fragment key={i}>
          <QualificationItem qualification={left} ref={ref => leftsRef.current.push(ref)} />
          <div style={{ flexGrow: 100 }} />
          {right && <QualificationItem qualification={right} ref={ref => rightsRef.current.push(ref)} />}
        </React.Fragment>
      )
    })

  return (
    <BackgroundOverlay
      src={landing2}
      aspectRatio={1440 / 913}
      contentPercentage={isSmall ? 79 : 79}
      offsetPercentage={isSmall ? 25 : 30}
      minHeightPx={isSmall ? 1200 : 0}
      objectPosition="50% 50%"
      {...props}>
      <HomeContainer>
        <Typography className={classes.title}>คุณสมบัติผู้สมัคร</Typography>
        <div className={classes.container}>{items}</div>
      </HomeContainer>
    </BackgroundOverlay>
  )
}

const useStyleItem = makeStyles(theme => ({
  container: {
    display: "inline-grid",
    width: "min-content",
    gridTemplateColumns: "min-content max-content",
    gridTemplateRows: "1fr",
    gap: "0 20px"
  },
  description: {
    fontSize: `clamp(1rem, 4.5vw,${theme.typography.body2.fontSize})`,
    fontWeight: "normal",
    lineHeight: pxToRem(36),
    alignSelf: "center"
  },
  logoImg: {
    width: "80px",
    height: "80px",
    justifySelf: "c,enter"
  },
  line: {
    lineHeight: "0px"
  }
}))
const QualificationItem = React.forwardRef<HTMLDivElement, { qualification: Qualification }>((props, ref) => {
  const theme = useTheme()
  const isSmall = useMediaQuery<Theme>(theme.breakpoints.down("sm"))
  const classes = useStyleItem()

  let description = props.qualification.description
  if (isSmall) {
    description = description.replaceAll("\t", "\n")
  }

  return (
    <div className={classes.container} ref={ref}>
      <Avatar src={props.qualification.src} className={classes.logoImg}></Avatar>
      <Typography align="left" className={classes.description}>
        {description.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            <span className={classes.line}>{line}</span>
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </div>
  )
})

export default HomeQualification
