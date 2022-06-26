import isString from 'is-string';

const REGEX =
  /[A-Z\u00C0-\u00D6\u00D8-\u00DE]?[a-z\u00DF-\u00F6\u00F8-\u00FF]+|[A-Z\u00C0-\u00D6\u00D8-\u00DE]+(?![a-z\u00DF-\u00F6\u00F8-\u00FF])|\d+/g;

export const stringToWords = (value: string): string[] => {
  if (!isString(value)) {
    return [];
  }

  const matchResult = value.match(REGEX);

  if (!matchResult) {
    return [];
  }

  return matchResult;
};
