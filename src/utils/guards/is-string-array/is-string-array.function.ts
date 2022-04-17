import { isArray, isString } from '@utils';

export const isStringArray = (value: unknown): value is string[] => {
  if (!isArray(value)) {
    return false;
  }

  if (value.some((_value) => !isString(_value))) {
    return false;
  }

  return true;
};
