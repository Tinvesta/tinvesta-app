import { isStringArray } from '@utils';

export const stringArrayToLowerCase = (array: string[]) => {
  if (!isStringArray(array)) {
    return array;
  }

  return array.map((_value) => _value.toLowerCase());
};
