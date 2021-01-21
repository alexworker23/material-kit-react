import { createMuiTheme, colors, Theme, ThemeOptions } from '@material-ui/core';
import { shadows } from './shadows';
import { typography } from './typography';
import { Palette, TypeBackground } from '@material-ui/core/styles/createPalette';

interface ICustomBackground extends TypeBackground {
  dark: string;
}

interface ICustomPalette extends Palette {
  background: ICustomBackground;
}

interface ICustomThemeOptions extends ThemeOptions {
  palette: ICustomPalette;
}

export interface ICustomTheme extends Theme {
  palette: ICustomPalette;
}

export const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  shadows,
  typography
} as ICustomThemeOptions);
