import { AppProvider } from '@application';

import S from './app.styles';
import { IAppProps } from './app.types';

export const App = ({ Component, pageProps }: IAppProps) => (
  <AppProvider>
    <S.StyledWrapper>
      <Component {...pageProps} />
    </S.StyledWrapper>
  </AppProvider>
);
