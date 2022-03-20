import { CacheProvider, LocaleProvider, ThemeProvider } from '..';
import { IAppProviderProps } from './app-provider.types';

export const AppProvider = ({ children }: IAppProviderProps): JSX.Element => (
  <ThemeProvider>
    <LocaleProvider>
      <CacheProvider>{children}</CacheProvider>
    </LocaleProvider>
  </ThemeProvider>
);
