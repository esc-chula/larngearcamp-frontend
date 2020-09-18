import React, { useEffect, useRef } from "react"
import { Typography, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { pxToRem } from "../../../utils/conversion"
import HomeContainer from "./home-container.component"

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
const HomeQualification: React.FC<{
  qualifications: Qualification[]
}> = props => {
  const classes = useStyle()

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

    console.log(w1 + w2)
  }, [])

  const items = []
  for (let i = 0; i < props.qualifications.length; i += 2) {
    const [left, right] = [props.qualifications[i], props.qualifications[i + 1]]

    items.push(<QualificationItem qualification={left} ref={ref => leftsRef.current.push(ref)} />)
    items.push(<div style={{ flexGrow: 100 }} />)
    right && items.push(<QualificationItem qualification={right} ref={ref => rightsRef.current.push(ref)} />)
  }

  return (
    <HomeContainer>
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
        {props.qualification.description.split("\n").map(line => (
          <>
            <span>{line}</span>
            <br />
          </>
        ))}
      </Typography>
    </div>
  )
})

export default HomeQualification
