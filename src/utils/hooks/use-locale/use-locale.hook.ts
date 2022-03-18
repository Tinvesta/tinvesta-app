import { useContext, useMemo } from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { ILocaleContextValue, LocaleContext } from '@infrastructure';

export const useLocale = (): IntlShape & ILocaleContextValue => {
  const intl = useIntl();
  const localeContext = useContext(LocaleContext);

  if (!localeContext) {
    throw new Error(
      'LocaleContext is unavailable, make sure you are using LocaleProvider context.',
    );
  }

  return useMemo(
    () => ({
      ...intl,
      ...localeContext,
    }),
    [intl, localeContext],
  );
};
