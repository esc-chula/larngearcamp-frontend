import { createMuiTheme, Theme } from "@material-ui/core"
import { PaletteOptions } from "@material-ui/core/styles/createPalette"

import { IColorSet } from "./types"

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    gray: IColorSet
    green: IColorSet
  }
  interface PaletteOptions {
    gray: IColorSet
    green: IColorSet
  }
}

declare module "@material-ui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const palette: PaletteOptions = {
  primary: {
    light: "#C03A42",
    main: "#941014",
    dark: "#721C20"
  },
  gray: {
    0: "#FFFFFF",
    50: "#F2F2F2",
    100: "#E4E4E4",
    200: "#BFBFBF",
    300: "#8C8C8C",
    400: "#8C8C8C",
    500: "#737373",
    600: "#595959",
    700: "#404040",
    800: "#262626",
    900: "#0D0D0D"
  },
  green: {
    0: "#E9F3D5",
    50: "#D0EBBA",
    100: "#B1E19F",
    200: "#8CD884",
    300: "#6BCD74",
    400: "#52C271",
    500: "#39B774",
    600: "#30A27E",
    700: "#278D82",
    800: "#206D77",
    900: "#184960"
  },
  secondary: {
    main: "#333333"
  },
  warning: {
    main: "#E4A527"
  },
  success: {
    main: "#39B774"
  },
  contrastThreshold: 3,
  tonalOffset: 0.2
}

const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: [
      "Kanit",
      "Raleway",
      "Sarabun",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"
    ].join(","),
    fontSize: 14,
    h1: {
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: "3rem"
    },
    h2: {
      fontWeight: 400,
      fontSize: "2.25rem",
      lineHeight: "2.25rem"
    },
    h3: {
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: "2rem"
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.875rem",
      lineHeight: "2.803rem"
    },
    h5: {
      fontWeight: 200,
      fontSize: "1.75rem",
      lineHeight: "2.616rem"
    },
    h6: {
      fontWeight: 200,
      fontSize: "1.5rem",
      lineHeight: "2.243rem"
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "1.875rem"
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "1.125rem",
      lineHeight: "1.682rem"
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.495rem"
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.308rem"
    },
    button: {
      fontWeight: 300,
      fontSize: "1.125rem",
      lineHeight: "1.682rem",
      textTransform: "uppercase"
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.656rem",
      lineHeight: "1.121rem"
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.656rem",
      lineHeight: "1.121rem",
      letterSpacing: "10%",
      textTransform: "uppercase"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 640,
      lg: 840,
      xl: 1280
    }
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 0
      }
    },
    MuiTableCell: {
      root: {
        padding: 16
      }
    }
  }
})

export { theme }
