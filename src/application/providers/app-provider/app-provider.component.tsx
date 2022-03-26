import {
  CacheProvider,
  LocaleProvider,
  QueryClientProvider,
  ThemeProvider,
  UserProvider,
} from '..';
import { IAppProviderProps } from './app-provider.types';

export const AppProvider = ({ children }: IAppProviderProps): JSX.Element => (
  <ThemeProvider>
    <LocaleProvider>
      <UserProvider>
        <QueryClientProvider>
          <CacheProvider>{children}</CacheProvider>
        </QueryClientProvider>
      </UserProvider>
    </LocaleProvider>
  </ThemeProvider>
);
