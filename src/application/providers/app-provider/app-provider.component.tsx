import {
  CacheProvider,
  ConfirmationModalProvider,
  HealthCheckProvider,
  LocaleProvider,
  QueryClientProvider,
  QueryParamProvider,
  ThemeProvider,
  ToastProvider,
  UserProvider,
} from '..';
import { IAppProviderProps } from './app-provider.types';

export const AppProvider = ({ children, emotionCache }: IAppProviderProps): JSX.Element => (
  <QueryParamProvider>
    <ThemeProvider>
      <CacheProvider emotionCache={emotionCache}>
        <ToastProvider>
          <LocaleProvider>
            <ConfirmationModalProvider>
              <QueryClientProvider>
                <HealthCheckProvider>
                  <UserProvider>{children}</UserProvider>
                </HealthCheckProvider>
              </QueryClientProvider>
            </ConfirmationModalProvider>
          </LocaleProvider>
        </ToastProvider>
      </CacheProvider>
    </ThemeProvider>
  </QueryParamProvider>
);
