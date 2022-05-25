import { ELocale } from '@enums';

export const LARGE_SCREEN_BREAKPOINT = 1600;
export const MEDIUM_SCREEN_BREAKPOINT = 1200;
export const SMALL_SCREEN_BREAKPOINT = 992;
export const MOBILE_SCREEN_BREAKPOINT = 768;
export const XMOBILE_SCREEN_BREAKPOINT = 480;

export const STARTUP_CLIENT_TYPE_ID = 1;
export const INVESTOR_CLIENT_TYPE_ID = 2;

export const DISCOVER_LIKES_LIMIT = 10;
export const INDUSTRIAL_SECTORS_LIMIT = 10;

export const DEFAULT_LOCALE: ELocale =
  (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as ELocale) ?? ELocale.EN;

export const SINGLE_WORD_REGEX = /^(\S+)$/;
export const TEXT_INPUT_REGEX = /^(\S+\s)*\S+$/;
export const EMAIL_UNIVERSAL_REGEX = /^\S+@\S+\.\S+$/;
export const WHITESPACES_REGEX = /^\S$|^\S[\S\s]*\S$/;
