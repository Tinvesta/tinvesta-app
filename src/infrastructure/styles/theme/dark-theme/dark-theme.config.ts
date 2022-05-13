import { createTheme } from '@mui/material';

import { color } from '@infrastructure/styles/variables';

import {
  MEDIUM_SCREEN_BREAKPOINT,
  MOBILE_SCREEN_BREAKPOINT,
  SMALL_SCREEN_BREAKPOINT,
  XMOBILE_SCREEN_BREAKPOINT,
} from '@constants';

export const darkTheme = createTheme({
  palette: {
    grey: color.gray,
    error: color.red,
    primary: {
      ...color.black,
      main: color.black[500],
      contrastText: color.black[100],
    },
    success: color.green,
    secondary: {
      ...color.gray,
      main: color.gray[500],
      contrastText: color.gray[100],
    },
    warning: color.yellow,
    background: {
      paper: color.black[700],
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
    info: color.blue,
    mode: 'dark',
    divider: color.black[400],
  },
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
  spacing: [
    0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96,
    100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172,
    176,
  ],
  breakpoints: {
    values: {
      xs: 0,
      lg: SMALL_SCREEN_BREAKPOINT,
      md: MOBILE_SCREEN_BREAKPOINT,
      sm: XMOBILE_SCREEN_BREAKPOINT,
      xl: MEDIUM_SCREEN_BREAKPOINT,
    },
  },
});
