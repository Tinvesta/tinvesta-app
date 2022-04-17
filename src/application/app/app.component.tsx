import { Fragment } from 'react';

import { AppProvider } from '@application';

import S from './app.styles';
import { IAppProps } from './app.types';

import 'react-toastify/dist/ReactToastify.css';

export const App = ({ Component, emotionCache, pageProps }: IAppProps) => {
  const Layout = Component.Layout || Fragment;

  return (
    <AppProvider emotionCache={emotionCache}>
      <S.StyledWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </S.StyledWrapper>
    </AppProvider>
  );
};
