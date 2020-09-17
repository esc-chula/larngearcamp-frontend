import React from "react"
import { useFormContext } from "react-hook-form"
import { Box, TextField, Typography } from "@material-ui/core"
import ChoiceModel from "../../models/choice.model"
import { makeStyles } from "@material-ui/core/styles"

interface CheckboxTypeProps {
  name: string
  contents: Array<ChoiceModel> | undefined
}

const useStyles = makeStyles(theme => ({
  input: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    maxWidth: 50,
    "&:first-child": {
      marginTop: 0
    }
  },
  container: {
    marginTop: theme.spacing(2),
    display: "flex"
  }
}))

const RankingTypeComponent: React.FC<CheckboxTypeProps> = ({ name, contents, ...other }) => {
  const classes = useStyles()
  const { register } = useFormContext()
  return (
    <Box mt={2} display="flex" flexDirection="column">
      {contents?.map((content, index) => (
        <div className={classes.container} key={index}>
          <TextField
            className={classes.input}
            placeholder="อันดับ"
            ref={register}
            name={`q${index}`}
            size="small"
            inputProps={{ min: 0, style: { textAlign: "center" } }}
          />
          <Typography>{content.label}</Typography>
        </div>
      ))}
    </Box>
  )
}

export { RankingTypeComponent }
