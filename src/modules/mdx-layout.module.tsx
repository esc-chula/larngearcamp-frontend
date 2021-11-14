import React, { useMemo } from "react"
import Particles, { ISourceOptions } from "react-tsparticles"
import { MDXProvider, MDXProviderComponents, MDXProviderProps } from "@mdx-js/react"
import { styled } from "@material-ui/styles"
import { makeStyles, Typography, useTheme } from "@material-ui/core"

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

const Card = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  padding: theme.spacing(4),
  margin: theme.spacing(2, 0),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2)
  }
}))

const CardHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2)
}))

const H1: React.FC = props => <Typography variant="h2" component="h1" color="primary" style={{ textAlign: "center" }} {...props} />

const H2: React.FC = props => <Typography variant="subtitle1" component="h2" {...props} />

const useStyles = makeStyles(() => ({
  tsparticles: {
    "& > *": {
      zIndex: "-1!important"
    }
  }
}))

export const MDXLayout: React.FC<Omit<MDXProviderProps, "components">> = props => {
  const components: MDXProviderComponents = {
    wrapper: wrapper,
    h1: H1,
    h2: H2,
    a: props => <A className="no-underline" {...props} />,
    Card: Card,
    CardHeader: props => <CardHeader variant="subtitle1" {...props} />
  }
  const classes = useStyles()
  const theme = useTheme()
  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: [theme.palette.primary.main, theme.palette.gray[400], theme.palette.gray[100], theme.palette.primary.light]
        },
        shape: {
          type: ["polygon", "triangle", "square"],
          polygon: {
            nb_sides: 3
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.4,
            sync: true
          }
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 10,
            size_max: 40,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: theme.palette.gray[200],
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    }),
    [theme]
  )
  return (
    <>
      <MDXProvider {...props} components={components} />
      <Particles id="tsparticles" options={options} className={classes.tsparticles} />
    </>
  )
}
