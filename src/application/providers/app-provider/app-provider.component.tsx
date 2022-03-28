import {
  CacheProvider,
  LocaleProvider,
  QueryClientProvider,
  ThemeProvider,
  ToastProvider,
  UserProvider,
} from '..';
import { IAppProviderProps } from './app-provider.types';

export const AppProvider = ({ children, emotionCache }: IAppProviderProps): JSX.Element => {
  console.log(emotionCache, 'emotionCache');

  return (
    <ThemeProvider>
      <CacheProvider emotionCache={emotionCache}>
        <ToastProvider>
          <LocaleProvider>
            <UserProvider>
              <QueryClientProvider>{children}</QueryClientProvider>
            </UserProvider>
          </LocaleProvider>
        </ToastProvider>
      </CacheProvider>
    </ThemeProvider>
  );
};
