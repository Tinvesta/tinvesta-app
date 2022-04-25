import { css } from '@emotion/react';

export type TCSSParams = Parameters<typeof css>;
export type TMediaFor = 'min-width' | 'max-width';

export type TDeviceBreakpoint = 'large' | 'medium' | 'small' | 'mobile' | 'xmobile';

export type TDeviceBreakpointObject = Record<TDeviceBreakpoint, number>;
