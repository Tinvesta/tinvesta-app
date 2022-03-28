import { CacheProvider as EmotionCacheProvider } from '@emotion/react';

import { createEmotionCache } from '@utils';

import { ICacheProviderProps } from './cache-provider.types';

const clientSideEmotionCache = createEmotionCache();

export const CacheProvider = ({ children, emotionCache }: ICacheProviderProps): JSX.Element => (
  <EmotionCacheProvider value={emotionCache || clientSideEmotionCache}>
    {children}
  </EmotionCacheProvider>
);
