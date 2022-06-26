import isString from 'is-string';

const prepareResponse = (firstName: string, lastName: string) => ({ firstName, lastName });

export const getFirstNameAndLastNameFromMultiPartFullName = (fullName: string) => {
  if (!isString(fullName)) {
    return prepareResponse('', '');
  }

  const words = fullName.split(' ');

  if (words.length === 0) {
    return prepareResponse('', '');
  }

  if (words.length === 1) {
    return prepareResponse(words[0], '');
  }

  return prepareResponse(words[0], words.pop() || '');
};
