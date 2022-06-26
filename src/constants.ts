import { ELocale } from '@enums';

export const XL_SCREEN_BREAKPOINT = 1600;
export const LG_SCREEN_BREAKPOINT = 1200;
export const MD_SCREEN_BREAKPOINT = 992;
export const SM_SCREEN_BREAKPOINT = 768;
export const XS_SCREEN_BREAKPOINT = 480;

export const STARTUP_CLIENT_TYPE_ID = 1;
export const INVESTOR_CLIENT_TYPE_ID = 2;

export const PAGINATION_LIMIT = 10;
export const DISCOVER_LIKES_LIMIT = 10;
export const INDUSTRIAL_SECTORS_LIMIT = 10;

export const USER_REF_LOCAL_STORAGE_KEY = 'user-ref';

export const INDEXEDDB_TENSORFLOW_MODEL_STORAGE_KEY = 'indexeddb://model';

export const DEFAULT_LOCALE: ELocale =
  (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as ELocale) ?? ELocale.EN;

export const SINGLE_WORD_REGEX = /^(\S+)$/;
export const TEXT_INPUT_REGEX = /^(\S+\s)*\S+$/;
export const EMAIL_UNIVERSAL_REGEX = /^\S+@\S+\.\S+$/;
export const WHITESPACES_REGEX = /^\S$|^\S[\S\s]*\S$/;
