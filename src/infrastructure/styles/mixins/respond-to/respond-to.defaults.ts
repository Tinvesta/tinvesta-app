import { TBreakpoints } from 'use-device-detect';

import {
  LG_SCREEN_BREAKPOINT,
  MD_SCREEN_BREAKPOINT,
  SM_SCREEN_BREAKPOINT,
  XL_SCREEN_BREAKPOINT,
  XS_SCREEN_BREAKPOINT,
} from '@constants';

export const deviceBreakpoint: TBreakpoints = {
  xl: XL_SCREEN_BREAKPOINT,
  lg: LG_SCREEN_BREAKPOINT,
  md: MD_SCREEN_BREAKPOINT,
  sm: SM_SCREEN_BREAKPOINT,
  xs: XS_SCREEN_BREAKPOINT,
};
