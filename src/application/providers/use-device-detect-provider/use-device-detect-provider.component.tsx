import { DeviceDetectProvider } from 'use-device-detect';

import {
  LG_SCREEN_BREAKPOINT,
  MD_SCREEN_BREAKPOINT,
  SM_SCREEN_BREAKPOINT,
  XL_SCREEN_BREAKPOINT,
  XS_SCREEN_BREAKPOINT,
} from '@constants';

import { IUseDeviceDetectProviderProps } from './use-device-detect-provider.types';

export const UseDeviceDetectProvider = ({
  children,
}: IUseDeviceDetectProviderProps): JSX.Element => (
  <DeviceDetectProvider
    breakpoints={{
      xl: XL_SCREEN_BREAKPOINT,
      lg: LG_SCREEN_BREAKPOINT,
      md: MD_SCREEN_BREAKPOINT,
      sm: SM_SCREEN_BREAKPOINT,
      xs: XS_SCREEN_BREAKPOINT,
    }}
  >
    {children}
  </DeviceDetectProvider>
);
