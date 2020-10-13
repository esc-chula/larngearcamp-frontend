import React from "react"
import { Grid, GridProps, Typography, makeStyles, Divider, TextField } from "@material-ui/core"

export interface UserDataProps extends GridProps {
  name: string
  linkLabel?: string
  value?: string
  header?: Boolean
  multiline?: Boolean
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
  },
  multiline: {
    "&>*:not(p)": {
      minHeight: 80,
      display: "flex",
      alignItems: "flex-start"
    }
  },
  fileName: {
    marginTop: theme.spacing(1),
    fontWeight: "bold",
    width: "fit-content",
    color: theme.palette.success.main,
    "&:after": {
      background: theme.palette.success.main
    }
  },
  fit: {
    margin: theme.spacing(1, 0, 0, 0),
    width: "fit-content",
    height: "fit-content"
  }
}))

const UserDataComponent: React.FC<UserDataProps> = ({ name, value, header, linkLabel, multiline, ...props }) => {
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
      {!!linkLabel ? (
        <Typography className={classes.fit} component="div" variant="body2">
          <a href={value} className={classes.fileName} target="_blank" rel="noopener noreferrer">
            {linkLabel}
          </a>
        </Typography>
      ) : multiline ? (
        <TextField value={value} variant="outlined" size="small" multiline className={classes.multiline} fullWidth disabled />
      ) : (
        <TextField value={value} fullWidth disabled variant="outlined" size="small" />
      )}
    </Grid>
  )
}

export default UserDataComponent
