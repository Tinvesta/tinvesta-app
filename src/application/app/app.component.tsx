import { useEffect, useState } from 'react';

import {
  CacheProvider,
  ConfirmationModalProvider,
  LocaleProvider,
  QueryClientProvider,
  QueryParamProvider,
  ThemeProvider,
  ToastProvider,
  UserProvider,
} from '@application';

import { Loader } from '@ui/atoms';

import { IAppProps } from './app.types';

import 'react-toastify/dist/ReactToastify.css';

export const App = ({ Component, emotionCache, pageProps }: IAppProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider>
      <QueryParamProvider>
        <CacheProvider emotionCache={emotionCache}>
          <ToastProvider>
            <LocaleProvider>
              <QueryClientProvider>
                <ConfirmationModalProvider>
                  <UserProvider>
                    {isLoading ? <Loader /> : <Component {...pageProps} />}
                  </UserProvider>
                </ConfirmationModalProvider>
              </QueryClientProvider>
            </LocaleProvider>
          </ToastProvider>
        </CacheProvider>
      </QueryParamProvider>
    </ThemeProvider>
  );
};
