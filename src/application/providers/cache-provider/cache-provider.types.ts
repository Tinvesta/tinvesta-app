import { EmotionCache } from '@emotion/cache';
import { ReactNode } from 'react';

export interface ICacheProviderProps {
  children: ReactNode;
  emotionCache?: EmotionCache;
}
