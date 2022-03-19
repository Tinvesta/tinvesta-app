import * as R from 'ramda';
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { getAvailableLanguages } from '@utils';

import { LocaleContext } from '@infrastructure';
import { translations } from '@infrastructure/i18n/translations';

import { ELocale } from '@enums';

import { DEFAULT_LOCALE } from '@constants';

import { ILocaleProviderProps } from './locale-provider.types';

export const LocaleProvider = ({ children }: ILocaleProviderProps) => {
  const [locale, setLocale] = useState<ELocale>(DEFAULT_LOCALE);

  const mapAvailableLanguagesToLocaleEnum = (languages: string[]) => {
    const localesFromEnum = Object.values(ELocale);

    const result = languages.reduce<ELocale[]>((_accumulator, _language) => {
      const foundMatchWithEnum = localesFromEnum.find((_localeFromEnum) =>
        _language.includes(_localeFromEnum),
      );

      return foundMatchWithEnum ? [..._accumulator, foundMatchWithEnum] : _accumulator;
    }, []);

    return R.uniq(result);
  };

  useEffect(() => {
    const availableLanguages = getAvailableLanguages();

    if (!availableLanguages) {
      return;
    }

    const mappedLanguages = mapAvailableLanguagesToLocaleEnum(availableLanguages);
    const [firstLanguage] = mappedLanguages;

    if (firstLanguage && firstLanguage !== DEFAULT_LOCALE) {
      setLocale(firstLanguage);
    }
  }, []);

  return (
    <IntlProvider defaultLocale={DEFAULT_LOCALE} locale={locale} messages={translations[locale]}>
      <LocaleContext.Provider
        value={{
          locale,
          setLocale,
          defaultLocale: DEFAULT_LOCALE,
        }}
      >
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  );
};
