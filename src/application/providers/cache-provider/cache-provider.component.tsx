import { CacheProvider as EmotionCacheProvider } from '@emotion/react';

import { createEmotionCache } from '@utils';

import { ICacheProviderProps } from './cache-provider.types';

const clientSideEmotionCache = createEmotionCache();

export const CacheProvider = ({ children }: ICacheProviderProps): JSX.Element => (
  <EmotionCacheProvider value={clientSideEmotionCache}>{children}</EmotionCacheProvider>
);
