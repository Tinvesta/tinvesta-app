/// <reference types="next" />
/// <reference types="next/image-types/global" />
import '@emotion/react';

import { defaultTheme } from '@infrastructure';

declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ProcessEnv {
    NEXT_PUBLIC_APP_ENV: 'test' | 'local' | 'staging' | 'production';
  }
}

type TTheme = typeof defaultTheme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme extends TTheme {}
}
