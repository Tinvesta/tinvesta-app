import {
  CacheProvider,
  ConfirmationModalProvider,
  LocaleProvider,
  QueryClientProvider,
  ThemeProvider,
  ToastProvider,
  UserProvider,
} from '..';
import { IAppProviderProps } from './app-provider.types';

export const AppProvider = ({ children, emotionCache }: IAppProviderProps): JSX.Element => (
  <ThemeProvider>
    <CacheProvider emotionCache={emotionCache}>
      <ToastProvider>
        <LocaleProvider>
          <ConfirmationModalProvider>
            <UserProvider>
              <QueryClientProvider>{children}</QueryClientProvider>
            </UserProvider>
          </ConfirmationModalProvider>
        </LocaleProvider>
      </ToastProvider>
    </CacheProvider>
  </ThemeProvider>
);
