import NextNProgress from 'nextjs-progressbar';

import { AppProvider } from '@application';

import S from './app.styles';
import { IAppProps } from './app.types';

import 'react-toastify/dist/ReactToastify.css';

export const App = ({ Component, emotionCache, pageProps }: IAppProps) => (
  <AppProvider emotionCache={emotionCache}>
    <S.StyledWrapper>
      <NextNProgress color="#65AFFF" stopDelayMs={200} />
      <Component {...pageProps} />
    </S.StyledWrapper>
  </AppProvider>
);
