import { createTheme } from '@mui/material';

import { color } from '@infrastructure/styles/variables';

export const defaultTheme = createTheme({
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
      paper: color.gray[400],
      default: color.gray[900],
    },
    text: {
      primary: color.gray[200],
      disabled: color.gray[400],
      secondary: color.gray[900],
    },
    common: {
      black: color.gray[900],
      white: color.gray[200],
    },
    mode: 'dark',
    divider: color.gray[400],
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});
