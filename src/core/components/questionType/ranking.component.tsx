import React from "react"
import { useFormContext } from "react-hook-form"
import { Box, TextField, Typography } from "@material-ui/core"
import ChoiceModel from "../../models/choice.model"
import { makeStyles } from "@material-ui/core/styles"
import { sequenceConstant } from "../../constants/sequence.constant"
import { resolve } from "../../../utils/other"

interface CheckboxTypeProps {
  name: string
  contents: Array<ChoiceModel> | undefined
}

const useStyles = makeStyles(theme => ({
  input: {
    minWidth: 25,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    maxWidth: 80,
    "&:first-child": {
      marginTop: 0
    }
  },
  container: {
    marginTop: theme.spacing(2),
    display: "flex"
  },
  errorMSG: {
    marginTop: theme.spacing(2)
  }
}))

const RankingTypeComponent: React.FC<CheckboxTypeProps> = ({ name, contents }) => {
  const classes = useStyles()
  const { register, errors } = useFormContext()
  const selfTopError = resolve(name, errors)

  return (
    <>
      <Box display="flex" flexDirection="column">
        {contents?.map((content, index) => {
          const newName = `${name}.${sequenceConstant[index + 1]}`
          const selfError = resolve(newName, errors)
          return (
            <div className={classes.container} key={index}>
              <TextField
                name={newName}
                placeholder="อันดับ"
                size="small"
                inputRef={register}
                className={classes.input}
                error={!!selfError}
                helperText={selfError?.message}
                inputProps={{ min: 0, style: { textAlign: "center" } }}
              />
              <Typography>{content.label}</Typography>
            </div>
          )
        })}
      </Box>
      {!!selfTopError && (
        <Typography variant="caption" color="error" className={classes.errorMSG}>
          {selfTopError?.message}
        </Typography>
      )}
    </>
  )
}

export { RankingTypeComponent }
