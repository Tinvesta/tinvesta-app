import { ELocale } from '@enums';

import enMessages from './languages/en';

export const translations: Record<ELocale, Record<keyof typeof enMessages, string>> = {
  [ELocale.EN]: enMessages as Record<string, string>,
};
