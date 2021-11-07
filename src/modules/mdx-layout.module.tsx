import React from "react"
import { MDXProvider, MDXProviderComponents, MDXProviderProps } from "@mdx-js/react"
import { styled } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const wrapper = styled("div")(({ theme }) => ({
  maxWidth: 640,
  margin: theme.spacing(0, "auto"),
  padding: theme.spacing(5, 10),
  color: theme.palette.gray[700],
  fontFamily: "Sarabun",
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.body2.lineHeight,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3)
  }
}))

const A = styled("a")(({ theme }) => ({
  color: theme.palette.primary.light,
  display: "inline-block",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.dark,
    textDecoration: "none"
  }
}))

const H1: React.FC = props => <Typography variant="h2" component="h1" color="primary" style={{ textAlign: "center" }} {...props} />

const H2: React.FC = props => <Typography variant="subtitle1" component="h2" {...props} />

export const MDXLayout: React.FC<Omit<MDXProviderProps, "components">> = props => {
  const components: MDXProviderComponents = {
    wrapper: wrapper,
    h1: H1,
    h2: H2,
    a: props => <A className="no-underline" {...props} />
  }
  return <MDXProvider {...props} components={components} />
}
