import { getObjectProperty, isArray, isNumber, isString } from '@utils';

export const arrayOfObjectsToArrayOfNumbers = (
  arrayOfObjects: Record<string, unknown>[],
  key: string,
) => {
  if (
    !isArray(arrayOfObjects) ||
    arrayOfObjects.length === 0 ||
    !isString(key) ||
    key.trim() === ''
  ) {
    return [];
  }

  const arrayOfNumbers = arrayOfObjects.map((_object) => {
    const value = getObjectProperty(_object, key);

    if (isNumber(value)) {
      return Number(value);
    }

    if (isString(value)) {
      return Number.parseInt(value, 10);
    }

    return null;
  });

  return arrayOfNumbers.filter((_number) => _number !== null);
};
