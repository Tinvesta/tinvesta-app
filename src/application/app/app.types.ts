import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

export interface IAppProps extends AppProps {
  // TODO - wait for next.js types update
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any;
  emotionCache?: EmotionCache;
}
