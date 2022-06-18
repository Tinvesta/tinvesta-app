import { useEffect, useState } from 'react';

import {
  CacheProvider,
  ConfirmationModalProvider,
  LocaleProvider,
  OfflineProvider,
  QueryClientProvider,
  QueryParamProvider,
  ThemeProvider,
  ToastProvider,
  UseDeviceDetectProvider,
  UserProvider,
} from '@application';

import { Loading } from '@ui';

import { IAppProps } from './app.types';

import 'react-toastify/dist/ReactToastify.css';

export const App = ({ Component, emotionCache, pageProps }: IAppProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <UseDeviceDetectProvider>
      <ThemeProvider>
        <QueryParamProvider>
          <CacheProvider emotionCache={emotionCache}>
            <ToastProvider>
              <LocaleProvider>
                <QueryClientProvider>
                  <ConfirmationModalProvider>
                    <OfflineProvider>
                      <UserProvider>
                        {isLoading ? <Loading /> : <Component {...pageProps} />}
                      </UserProvider>
                    </OfflineProvider>
                  </ConfirmationModalProvider>
                </QueryClientProvider>
              </LocaleProvider>
            </ToastProvider>
          </CacheProvider>
        </QueryParamProvider>
      </ThemeProvider>
    </UseDeviceDetectProvider>
  );
};
