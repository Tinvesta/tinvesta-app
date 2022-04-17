import { isString, stringArrayToLowerCase, stringToWords } from '@utils';

export const toSnakeCase = (string: string) => {
  if (!isString(string)) {
    return string;
  }

  const words = stringToWords(string);
  const lowerCaseWords = stringArrayToLowerCase(words);

  return lowerCaseWords.join('_');
};
