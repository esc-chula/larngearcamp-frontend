import React from "react"
import { Typography, Grid, Avatar } from "@material-ui/core"
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
  description: {
    fontWeight: "normal",
    lineHeight: pxToRem(36)
  },
  logoImg: {
    width: "80px",
    height: "80px",
    marginRight: "20px"
  },
  secondCol: {
    [theme.breakpoints.up("lg")]: {
      alignContent: "center"
    },
    alignContent: "left"
  }
}))

const HomeQualification: React.FC<{
  data: { description: string; src: string }[]
}> = props => {
  const classes = useStyle()

  const qulificationItem = (description: string, imgSrc: string) => (
    <div style={{ display: "inline-flex" }}>
      <Avatar src={imgSrc} className={classes.logoImg}></Avatar>
      <Grid container direction="column" justify="center">
        <Typography variant="body2" align="left" className={classes.description + " kanit"}>
          {description}
        </Typography>
      </Grid>
    </div>
  )

  const colGrids = []
  for (let i = 0; i < props.data.length; i += 2) {
    const ele1 = props.data[i]
    const ele2 = props.data[i + 1]

    colGrids.push(
      <Grid container item direction="column" className={classes.secondCol} xs={12} md={12} lg={6} spacing={2} key={i}>
        {ele1 && <Grid item>{qulificationItem(ele1.description, ele1.src)}</Grid>}
        {ele2 && <Grid item>{qulificationItem(ele2.description, ele2.src)}</Grid>}
      </Grid>
    )
  }

  return (
    <HomeContainer>
      <Typography variant="h3" className={classes.title}>
        คุณสมบัติผู้สมัคร
      </Typography>
      <Grid container spacing={2}>
        {colGrids}
      </Grid>
    </HomeContainer>
  )
}

export default HomeQualification
