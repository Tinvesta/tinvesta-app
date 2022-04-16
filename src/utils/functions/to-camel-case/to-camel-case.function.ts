import { isString, stringToWords } from '@utils';

export const toCamelCase = (string: string) => {
  if (!isString(string)) {
    return string;
  }

  let result = '';
  const words = stringToWords(string);

  if (!words) {
    return result;
  }

  for (const [_index, _currentString] of words.entries()) {
    let temporaryString = _currentString.toLowerCase();

    if (_index !== 0) {
      temporaryString = temporaryString.slice(0, 1).toUpperCase() + temporaryString.slice(1);
    }

    result += temporaryString;
  }
  return result;
};
