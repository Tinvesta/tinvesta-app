import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

import { AppProvider } from '@application';

import createEmotionCache from '../utils/create-emotion-cache';

export interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<IMyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <AppProvider>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </AppProvider>
  );
};

export default MyApp;
