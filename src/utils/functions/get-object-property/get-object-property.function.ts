import { hasOwnProperty } from 'ts-has-own-property';

import { isObject, isString } from '@utils';

export const getObjectProperty = (
  object: Record<string, unknown>,
  propertyName: string,
): unknown | null => {
  if (!isObject(object) || !isString(propertyName) || propertyName.trim() === '') {
    return null;
  }

  const propertyNames = propertyName.split('.');
  let currentObject: unknown = object;

  for (const propertyName of propertyNames) {
    if (!isObject(currentObject) || !hasOwnProperty(currentObject, propertyName)) {
      return null;
    }

    currentObject = currentObject[propertyName];
  }

  return currentObject ?? null;
};
