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
    },
    success: color.green,
    secondary: {
      ...color.gray,
      main: color.gray[500],
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
  spacing: [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128],
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
