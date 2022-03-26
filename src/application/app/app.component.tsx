import { AppProvider } from '@application';

import S from './app.styles';
import { IAppProps } from './app.types';
import { ParticlesBackground } from './atoms';

export const App = ({ Component, pageProps }: IAppProps) => (
  <AppProvider>
    <S.StyledWrapper>
      <ParticlesBackground />
      <Component {...pageProps} />
    </S.StyledWrapper>
  </AppProvider>
);
