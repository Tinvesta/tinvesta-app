import isString from 'is-string';

import { SINGLE_WORD_REGEX } from '@constants';

export const containSingleWord =
  (message: string = '') =>
  (value: unknown) => {
    if (!isString(value) || value.trim().length === 0) {
      return true;
    }

    return SINGLE_WORD_REGEX.test(String(value)) || message;
  };
