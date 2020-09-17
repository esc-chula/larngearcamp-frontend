import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"

type Props = {
    src: string,
    aspectRatio: number,
    contentPercentage?: number,
    disableAutoColor?: boolean
}

const useStyle = makeStyles<Theme, Props>(theme => ({
    backgroundImg: {
        zIndex: -1,
        width: '100%',
        position: 'absolute'
    },
    contentContainer: {
        width:"100%",
        height: 0,
        paddingTop: props => `${(props.contentPercentage || 100)/props.aspectRatio}%`,
        position: "relative"
    },
    content: {
        position: "absolute",
        top: 0,
        left:0,
        width: '100%',
        height: '100%',
        color: props => props.disableAutoColor ? '' : theme.palette.primary.contrastText
    }
}))

const BackgroundOverlay: React.FC<Props> = (props) => {
    const classes = useStyle(props);

    return (
    <div>
        <img src={props.src} className={classes.backgroundImg}/>
        <div className={classes.contentContainer}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    </div>
    )
}

export default BackgroundOverlay