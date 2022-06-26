import isString from 'is-string';

export const countWords = (string: string, splitWith: string = ' ') => {
  if (!isString(string)) {
    return 0;
  }

  return Math.max(string.split(splitWith).filter(Boolean).length - 1, 0);
};
