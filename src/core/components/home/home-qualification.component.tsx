import React, { useEffect, useRef } from "react"
import { Typography, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../../utils/conversion"
import HomeContainer, { HomeContainerProps } from "./home-container.component"

const useStyle = makeStyles(theme => ({
  title: {
    fontWeight: "normal",
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

  const leftsRef = useRef<(HTMLDivElement | null)[]>([])
  const rightsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const allToMaxWidth = (elements: HTMLElement[]) => {
      const maxWidth = elements.map(ele => ele?.clientWidth ?? 0).reduce((acc, w) => (w > acc ? w : acc), 0)

      elements.forEach(ele => (ele.style.width = `${maxWidth}px`))
      return maxWidth
    }

    allToMaxWidth(leftsRef.current.filter(x => x !== null) as HTMLDivElement[])
    allToMaxWidth(rightsRef.current.filter(x => x !== null) as HTMLDivElement[])
  }, [])

  const items = Array.from(Array(props.qualifications.length / 2).keys()).map(i => {
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
    <HomeContainer {...props}>
      <Typography variant="h3" className={classes.title}>
        คุณสมบัติผู้สมัคร
      </Typography>
      <div className={classes.container}>{items}</div>
    </HomeContainer>
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
    fontWeight: "normal",
    lineHeight: pxToRem(36),
    alignSelf: "center"
  },
  logoImg: {
    width: "80px",
    height: "80px",
    justifySelf: "center"
  }
}))
const QualificationItem = React.forwardRef<HTMLDivElement, { qualification: Qualification }>((props, ref) => {
  const classes = useStyleItem()

  return (
    <div className={classes.container} ref={ref}>
      <Avatar src={props.qualification.src} className={classes.logoImg}></Avatar>
      <Typography variant="body2" align="left" className={classes.description}>
        {props.qualification.description.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            <span>{line}</span>
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </div>
  )
})

export default HomeQualification
