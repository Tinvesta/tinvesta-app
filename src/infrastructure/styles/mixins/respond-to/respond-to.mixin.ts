import { css } from '@emotion/react';

import { deviceBreakpoint } from './respond-to.defaults';
import { TCSSParams, TMediaFor } from './respond-to.types';

const keys = Object.keys(deviceBreakpoint) as Array<keyof typeof deviceBreakpoint>;

const respondToDecorator = (mediaFor: TMediaFor) =>
  keys.reduce((accumulator, label) => {
    accumulator[label] = (...args: TCSSParams) => css`
      @media (${mediaFor}: ${deviceBreakpoint[label]}px) {
        ${css(...args)};
      }
    `;

    return accumulator;
  }, {} as Record<keyof typeof deviceBreakpoint, Function>);

export const respondToMin = respondToDecorator('min-width');

export const respondToMax = respondToDecorator('max-width');