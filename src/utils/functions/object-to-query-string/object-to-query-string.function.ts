import queryString from 'query-string';

import { IOptions } from './object-to-query-string.types';

export const objectToQueryString = <TObject>(
  object: TObject | undefined,
  { withQuestionMarkPrefix = true, ...restOptions }: IOptions = {},
) => {
  const result = queryString.stringify(object || {}, restOptions);

  if (!result) {
    return '';
  }

  if (withQuestionMarkPrefix) {
    return `?${result}`;
  }

  return result;
};
