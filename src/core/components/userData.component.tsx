import React from "react"
import { Grid, GridProps, Typography, makeStyles, Divider, TextField } from "@material-ui/core"

export interface UserDataProps extends GridProps {
  name: string
  value?: string
  header?: Boolean
}

const useStyles = makeStyles(theme => ({
  header: {
    margin: theme.spacing(3, 0, 2, 0)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  box: {
    boxShadow: "7px 7px 22px -5px rgba(0,0,0,0.56)"
  },
  title: {
    marginBottom: theme.spacing(1)
  }
}))

const UserDataComponent: React.FC<UserDataProps> = ({ name, value, header, ...props }) => {
  const classes = useStyles()
  if (header) {
    return (
      <Grid item xs={12} sm={12} md={12} className={classes.header}>
        <Typography variant="h6">{name}</Typography>
        <Divider className={classes.divider} />
      </Grid>
    )
  }
  return (
    <Grid item {...props}>
      <Typography variant="body1" className={classes.title}>
        {name}
      </Typography>
      <TextField value={value} fullWidth disabled variant="outlined" size="small" />
    </Grid>
  )
}

export default UserDataComponent
