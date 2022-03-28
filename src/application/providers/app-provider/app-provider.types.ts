import { EmotionCache } from '@emotion/react';
import { ReactNode } from 'react';

export interface IAppProviderProps {
  children: ReactNode | ReactNode[];
  emotionCache?: EmotionCache;
}
