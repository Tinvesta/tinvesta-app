import * as R from 'ramda';

export const getAvailableLanguages = (): string[] | undefined => {
  if (typeof navigator === 'undefined') {
    return;
  }

  const result = [];

  if (navigator.languages) {
    for (const _language of navigator.languages) {
      result.push(_language);
    }
  }

  if (navigator.language) {
    result.push(navigator.language);
  }

  return result.length > 0 ? R.uniq(result) : undefined;
};
