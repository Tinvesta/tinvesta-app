import { ThemeOptions, createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

import { color } from '@infrastructure/styles/variables';

import {
  LG_SCREEN_BREAKPOINT,
  MD_SCREEN_BREAKPOINT,
  SM_SCREEN_BREAKPOINT,
  XS_SCREEN_BREAKPOINT,
} from '@constants';

const defaultThemeConfig: ThemeOptions = {
  typography: {
    fontSize: 16,
    fontFamily: 'Montserrat, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  zIndex: {
    appBar: 20,
    drawer: 25,
    fab: 15,
    mobileStepper: 10,
    modal: 30,
    snackbar: 35,
    speedDial: 15,
    tooltip: 40,
  },
  shape: {
    borderRadius: 10,
  },
  spacing: [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128],
  breakpoints: {
    values: {
      xs: 0,
      lg: MD_SCREEN_BREAKPOINT,
      md: SM_SCREEN_BREAKPOINT,
      sm: XS_SCREEN_BREAKPOINT,
      xl: LG_SCREEN_BREAKPOINT,
    },
  },
};

export const darkTheme = createTheme({
  palette: {
    grey: color.gray,
    primary: {
      ...color.black,
      main: color.black[500],
    },
    success: green,
    secondary: {
      ...color.gray,
      main: color.gray[500],
    },
    background: {
      paper: color.black[500],
      default: color.black[700],
    },
    text: {
      primary: color.black[200],
      secondary: color.black[300],
      disabled: color.black[400],
    },
    common: {
      black: color.black[900],
      white: color.black[100],
    },
    action: {
      selectedOpacity: 0.5,
    },
    mode: 'dark',
    divider: color.black[400],
  },
  ...defaultThemeConfig,
});
