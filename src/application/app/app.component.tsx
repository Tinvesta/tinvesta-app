import { AppProvider } from '@application';

import { IAppProps } from './app.types';

export const App = ({ Component, pageProps }: IAppProps) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);
