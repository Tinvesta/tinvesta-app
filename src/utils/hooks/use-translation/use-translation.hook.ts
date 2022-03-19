import { camelCase, useLocale } from '@utils';

import { TMessages } from './use-translation.types';

export const useTranslation = <T extends readonly string[]>(key: T): TMessages<T> => {
  const { formatMessage } = useLocale();

  return Object.fromEntries(
    key.map((translationKey) => [
      camelCase(translationKey).split('.').join(''),
      formatMessage({ id: translationKey }),
    ]),
  ) as TMessages<T>;
};
