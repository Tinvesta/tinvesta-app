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
      ...color.gray,
      main: color.gray[200],
    },
    success: color.green,
    secondary: {
      ...color.gray,
      main: color.gray[900],
    },
    warning: color.yellow,
    background: {
      paper: color.gray[900],
      default: color.gray[900],
    },
    text: {
      primary: color.gray[200],
      disabled: color.gray[400],
      secondary: color.gray[500],
    },
    common: {
      black: color.gray[900],
      white: color.gray[200],
    },
    info: color.blue,
    mode: 'dark',
    divider: color.gray[400],
  },
  typography: {
    fontSize: 12,
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
    borderRadius: 0,
  },
  spacing: [
    0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96,
    100,
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
