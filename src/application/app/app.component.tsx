import {
  CacheProvider,
  ConfirmationModalProvider,
  HealthCheckProvider,
  LocaleProvider,
  QueryClientProvider,
  ThemeProvider,
  ToastProvider,
  UserProvider,
} from '@application';

import { IAppProps } from './app.types';

import 'react-toastify/dist/ReactToastify.css';

export const App = ({ Component, emotionCache, pageProps }: IAppProps) => (
  <ThemeProvider>
    <CacheProvider emotionCache={emotionCache}>
      <ToastProvider>
        <LocaleProvider>
          <QueryClientProvider>
            <HealthCheckProvider>
              <ConfirmationModalProvider>
                <UserProvider>
                  <Component {...pageProps} />
                </UserProvider>
              </ConfirmationModalProvider>
            </HealthCheckProvider>
          </QueryClientProvider>
        </LocaleProvider>
      </ToastProvider>
    </CacheProvider>
  </ThemeProvider>
);
