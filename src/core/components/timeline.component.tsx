import React from "react"
import { TextField, Typography, Button, Container, Paper, Checkbox, FormControlLabel, Box, Grid, Avatar, ListItem, List } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const UseStyleTL = makeStyles(theme => ({
    title: {
      marginBottom: "60px"
    },
    line: {
      height: "32px",
    },
    numberCircle: {
      backgroundColor: theme.palette.primary.main,
      width: "32px",
      height: "32px",
      lineHeight: "32px",
      borderRadius: "50%",
      textAlign: "center",  
      position: "absolute",
      left: "calc(50% - 16px)",
      color: "white",

    },
    NCLeftText: {
      color: "#828282",
      position: "absolute",
      right: "calc(50% + 16px + 32px)"
    },
    NCRightText: {
      position: "absolute",
      left: "calc(50% + 16px + 32px)"
    },
    hline: {
      margin: "5px auto 5px auto",
      width: "3px",
      height: "calc(48px - 10px)",
      backgroundColor: "#BDBDBD",
    }
  }));


interface TimelineLabel {
    left: string,
    right: string,
}
  
const TimelineDisplay: React.FC<{label: TimelineLabel[], startNumber?: number}> = (props) => {
    const classes = UseStyleTL();

    return (
    <>
        {props.label.map(({left, right}, i, arr) => 
        <>
            <div className={classes.line}>
                <Typography variant="body1" className={classes.NCLeftText}>
                    {left}
                </Typography>
                <Typography variant="subtitle2" className={classes.numberCircle}>
                    {(props.startNumber||1) + i}
                </Typography>
                <Typography variant="h6" className={classes.NCRightText}>
                    {right}
                </Typography>
            </div>

            {(i < arr.length-1) && <div className={classes.hline}></div>}
        </>
        )}
    </>
    )
}

export {TimelineDisplay}