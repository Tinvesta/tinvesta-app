import { AppProvider } from '@application';

import S from './app.styles';
import { IAppProps } from './app.types';

import 'react-toastify/dist/ReactToastify.css';

export const App = ({ Component, emotionCache, pageProps }: IAppProps) => (
  <AppProvider emotionCache={emotionCache}>
    <S.StyledWrapper>
      <Component {...pageProps} />
    </S.StyledWrapper>
  </AppProvider>
);
