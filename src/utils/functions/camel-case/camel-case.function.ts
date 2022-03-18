import { isString } from '@utils';

const substringToUpperCase = (substring: string) => substring[1].toUpperCase();

export const camelCase = (value: string) => {
  if (!isString(value)) {
    return '';
  }

  return value.replace(/[._-]([a-z])/g, substringToUpperCase);
};
