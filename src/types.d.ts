/// <reference types="next" />
/// <reference types="next/image-types/global" />
import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme extends MuiTheme {}
}
