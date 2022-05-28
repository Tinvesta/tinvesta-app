import {
  CacheProvider,
  ConfirmationModalProvider,
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
            <ConfirmationModalProvider>
              <UserProvider>
                <Component {...pageProps} />
              </UserProvider>
            </ConfirmationModalProvider>
          </QueryClientProvider>
        </LocaleProvider>
      </ToastProvider>
    </CacheProvider>
  </ThemeProvider>
);
