import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import { Palette } from "@material-ui/core/styles/createPalette"

export interface IColorSet {
  0: string
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}
interface IPalette extends Palette {
  gray: IColorSet
  green: IColorSet
}

export interface ITheme extends Theme {
  palette: IPalette
}

export interface IThemeOptions extends ThemeOptions {
  palette: IPalette
}
