import { ThemeProvider as StyledThemeProvider } from '@emotion/react';

import { GlobalStyles, ResetStyles, defaultTheme } from '@infrastructure';

import { IThemeProviderProps } from './theme-provider.types';

export const ThemeProvider = ({ children }: IThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={defaultTheme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
