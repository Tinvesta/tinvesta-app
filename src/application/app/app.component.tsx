import NextNProgress from 'nextjs-progressbar';

import { AppProvider } from '@application';

import { IAppProps } from './app.types';

import 'react-toastify/dist/ReactToastify.css';

export const App = ({ Component, emotionCache, pageProps }: IAppProps) => (
  <AppProvider emotionCache={emotionCache}>
    <NextNProgress color="#65AFFF" options={{ showSpinner: false }} stopDelayMs={200} />
    <Component {...pageProps} />
  </AppProvider>
);
