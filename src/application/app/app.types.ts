import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

export interface IAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
