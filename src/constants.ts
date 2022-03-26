import { ELocale } from '@enums';

export const LARGE_SCREEN_BREAKPOINT = 1600;
export const MEDIUM_SCREEN_BREAKPOINT = 1200;
export const SMALL_SCREEN_BREAKPOINT = 992;
export const MOBILE_SCREEN_BREAKPOINT = 768;
export const XMOBILE_SCREEN_BREAKPOINT = 480;

export const DEFAULT_LOCALE: ELocale =
  (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as ELocale) ?? ELocale.EN;
