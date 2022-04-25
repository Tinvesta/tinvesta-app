import {
  LARGE_SCREEN_BREAKPOINT,
  MEDIUM_SCREEN_BREAKPOINT,
  MOBILE_SCREEN_BREAKPOINT,
  SMALL_SCREEN_BREAKPOINT,
  XMOBILE_SCREEN_BREAKPOINT,
} from '@constants';

import { TDeviceBreakpointObject } from './respond-to.types';

export const deviceBreakpoint: TDeviceBreakpointObject = {
  large: LARGE_SCREEN_BREAKPOINT,
  small: SMALL_SCREEN_BREAKPOINT,
  medium: MEDIUM_SCREEN_BREAKPOINT,
  mobile: MOBILE_SCREEN_BREAKPOINT,
  xmobile: XMOBILE_SCREEN_BREAKPOINT,
};
