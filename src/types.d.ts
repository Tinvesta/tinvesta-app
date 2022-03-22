/// <reference types="next" />
/// <reference types="next/image-types/global" />
import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme extends MuiTheme {}
}

declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ProcessEnv {
    NEXT_PUBLIC_APP_ENV: 'test' | 'local' | 'staging' | 'production';
    NEXT_PUBLIC_ENABLE_HOME_PAGE: 'true' | 'false' | undefined;
  }
}
