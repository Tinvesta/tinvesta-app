import { CacheProvider, LocaleProvider, ThemeProvider, UserProvider } from '..';
import { IAppProviderProps } from './app-provider.types';

export const AppProvider = ({ children }: IAppProviderProps): JSX.Element => (
  <ThemeProvider>
    <LocaleProvider>
      <UserProvider>
        <CacheProvider>{children}</CacheProvider>
      </UserProvider>
    </LocaleProvider>
  </ThemeProvider>
);
