/// <reference types="next" />
/// <reference types="next/image-types/global" />
import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material';
import { ReactNode } from 'react';
import { QueryClientProviderProps as IQueryClientProviderProps } from 'react-query';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme extends MuiTheme {}
}

declare module 'react-query' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface QueryClientProviderProps extends IQueryClientProviderProps {
    children: ReactNode;
  }
}
