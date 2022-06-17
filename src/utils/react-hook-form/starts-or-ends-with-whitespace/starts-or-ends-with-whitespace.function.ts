import isString from 'is-string';

import { WHITESPACES_REGEX } from '@constants';

export const startsOrEndsWithWhitespace =
  (message: string = '') =>
  (value: unknown) => {
    if (!isString(value) || value.length === 0) {
      return true;
    }

    return WHITESPACES_REGEX.test(String(value)) || message;
  };
