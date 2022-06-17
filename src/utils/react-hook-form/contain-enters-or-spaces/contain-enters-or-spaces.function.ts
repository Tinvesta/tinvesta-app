import isString from 'is-string';

import { TEXT_INPUT_REGEX } from '@constants';

export const containEntersOrSpaces =
  (message: string = '') =>
  (value: unknown) => {
    if (!isString(value) || value.trim().length === 0) {
      return true;
    }

    return TEXT_INPUT_REGEX.test(String(value)) || message;
  };
