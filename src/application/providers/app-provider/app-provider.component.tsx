import {
  AlertProvider,
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
          <CacheProvider>
            <AlertProvider>{children}</AlertProvider>
          </CacheProvider>
        </QueryClientProvider>
      </UserProvider>
    </LocaleProvider>
  </ThemeProvider>
);
