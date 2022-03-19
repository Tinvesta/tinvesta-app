import { ThemeProvider as StyledThemeProvider } from '@emotion/react';

import { defaultTheme } from '@infrastructure';
import { GlobalStyles, ResetStyles } from '@infrastructure/styles/components';

import { IThemeProviderProps } from './theme-provider.types';

export const ThemeProvider = ({ children }: IThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={defaultTheme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
