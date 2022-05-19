import NextNProgress from 'nextjs-progressbar';

import {
  CacheProvider,
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
              <UserProvider>
                <NextNProgress color="#F5F5F5" options={{ showSpinner: false }} stopDelayMs={200} />
                <Component {...pageProps} />
              </UserProvider>
            </HealthCheckProvider>
          </QueryClientProvider>
        </LocaleProvider>
      </ToastProvider>
    </CacheProvider>
  </ThemeProvider>
);
