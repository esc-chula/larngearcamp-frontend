import React from "react"
import { Typography, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import HomeContainer from "./home-container.component"
import gearIcon from "../../../assets/images/icon/gear-icon.svg"
import facebookIcon from "../../../assets/images/icon/facebook-icon.svg"
import phoneIcon from "../../../assets/images/icon/communication-icon.svg"

const GearIcon: React.FC = props => {
  return (
    <object data={gearIcon} {...props}>
      Gear Icon
    </object>
  )
}
const FacebookIcon: React.FC<React.ObjectHTMLAttributes<HTMLObjectElement>> = props => {
  return (
    <object data={facebookIcon} {...props}>
      Facebook Icon
    </object>
  )
}
const PhoneIcon: React.FC = props => {
  return (
    <object data={phoneIcon} {...props}>
      Phone Icon
    </object>
  )
}

const useStyle = makeStyles(theme => ({
  container: {
    background: "#4F4F4F",
    color: "#E0E0E0",
    paddingTop: "92px",
    paddingBottom: "92px"
  },
  phoneIcon: {
    margin: theme.spacing(0, 0, 0, 1)
  },
  facebookContainer: {
    textAlign: "center"
  },
  center: {
    display: "flex",
    alignItems: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "max-content max-content max-content",
    gridTemplateRows: "repeat(auto-fill, minmax(auto, 1fr))",
    placeItems: "center start",
    gap: `${theme.spacing(1)}px ${theme.spacing(3)}px`
  }
}))

const HomeFooter: React.FC<{
  contacts: { name: string; tel: string }[]
}> = props => {
  const classes = useStyle()

  const left = (
    <>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="subtitle1">หากมีข้อสงสัยเพิ่มเติม สามารถติดต่อได้ที่</Typography>
        </Grid>
        <Grid item>
          <PhoneIcon />
        </Grid>
      </Grid>

      <div className={classes.grid}>
        {props.contacts.map(({ name, tel }) => (
          <React.Fragment key={name}>
            <GearIcon />
            <Typography variant="body2">{name}</Typography>
            <Typography variant="body2">{tel}</Typography>
          </React.Fragment>
        ))}
      </div>
    </>
  )

  const right = (
    <>
      <Typography variant="subtitle1">ติดตามข่าวสารเพิ่มเติมได้ที่</Typography>

      <Grid container>
        <Grid item xs={3} className={classes.facebookContainer}>
          <FacebookIcon />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body2">LarnGear Camp</Typography>
        </Grid>
      </Grid>
    </>
  )

  return (
    <Paper className={classes.container}>
      <HomeContainer>
        <Grid container justify="space-between">
          <Grid item>{left}</Grid>
          <Grid item>{right}</Grid>
        </Grid>
      </HomeContainer>
    </Paper>
  )
}

export default HomeFooter
