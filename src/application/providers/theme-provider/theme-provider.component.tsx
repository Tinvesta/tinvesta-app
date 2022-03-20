import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

import { defaultTheme } from '@infrastructure';
import { GlobalStyles, ResetStyles } from '@infrastructure/styles/components';

import { IThemeProviderProps } from './theme-provider.types';

export const ThemeProvider = ({ children }: IThemeProviderProps): JSX.Element => (
  <MuiThemeProvider theme={defaultTheme}>
    <EmotionThemeProvider theme={defaultTheme}>
      <ResetStyles />
      <GlobalStyles />
      <CssBaseline />
      {children}
    </EmotionThemeProvider>
  </MuiThemeProvider>
);