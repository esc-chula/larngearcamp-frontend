import React from "react"
import { Typography } from "@material-ui/core"
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
      borderRadius: "50%",  
      position: "absolute",
      left: "calc(50% - 16px)"
    },
    numberText: {
      position: "absolute",
      lineHeight: "32px",
      width: "32px",
      left: "calc(50% - 16px)",
      color: "white",
      textAlign: "center"
    },
    NCLeftText: {
      color: "#828282",
      position: "absolute",
      lineHeight: "32px",
      right: "calc(50% + 16px + 32px)",
      fontWeight: "normal"
    },
    NCRightText: {
      position: "absolute",
      lineHeight: "32px",
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
  
const TimelineDisplay: React.FC<{
    label: TimelineLabel[], 
    startNumber?: number,
    includeFinalLine?: boolean
    }> = (props) => {
    const classes = UseStyleTL();

    return (
    <>
        {props.label.map(({left, right}, i, arr) => 
        <div key={i}>
            <div className={classes.line}>
                <Typography variant="body2" className={classes.NCLeftText + ' kanit'}>
                    {left}
                </Typography>
                <div className={classes.numberCircle}></div>
                <Typography variant="body2" className={classes.numberText + ' kanit'}>
                    {(props.startNumber||1) + i}
                </Typography>
                <Typography variant="h6" className={classes.NCRightText}>
                    {right}
                </Typography>
            </div>

            {(props.includeFinalLine || (i < arr.length-1)) && <div className={classes.hline}></div>}
        </div>
        )}
    </>
    )
}

export {TimelineDisplay}