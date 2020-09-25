import { Box, Divider, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { documentLink } from "../constants/document.constant"
import { ruleConstant } from "../constants/rule.constant"

const useStyles = makeStyles(theme => ({
  divider: {
    marginBottom: theme.spacing(2)
  },
  bold: {
    fontWeight: 500
  },
  download: {
    width: "fit-content",
    marginLeft: theme.spacing(2)
  },
  downloadText: {
    color: theme.palette.primary.main,
    "&:after": {
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const DocComponent: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h5" align="center" className={classes.bold}>
        รายละเอียดของการสมัครค่ายลานเกียร์ครั้งที่ 20
      </Typography>
      <Divider className={classes.divider} />
      {ruleConstant.map((data, index) => (
        <Box mt={2} key={index + 1}>
          <Typography variant="subtitle1">{`${index + 1} ${data.title}`}</Typography>
          {data.contents.map((content, innerIndex) => (
            <Box pl={2} mt={1} key={index + "-" + innerIndex}>
              <Typography variant="body2">{`${index + 1}.${innerIndex + 1} ${content}`}</Typography>
              {index === 0 && innerIndex === 0 && (
                <div className={classes.download}>
                  <a href={documentLink} className={classes.downloadText} target="_blank" rel="noopener noreferrer">
                    ดาวน์โหลด
                  </a>
                </div>
              )}
            </Box>
          ))}
        </Box>
      ))}
    </>
  )
}

export { DocComponent }
