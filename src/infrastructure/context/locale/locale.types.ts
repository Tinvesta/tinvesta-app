import { ELocale } from '@enums';

export interface ILocaleContextValue {
  defaultLocale: ELocale;
  locale: ELocale;
  setLocale: (locale: ELocale) => void;
}
