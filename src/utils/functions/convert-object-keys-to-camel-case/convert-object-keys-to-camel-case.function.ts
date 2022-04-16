import { hasOwnProperty, isObject, toCamelCase } from '@utils';

export const convertObjectKeysToCamelCase = (object: unknown) => {
  if (!isObject(object) || Object.keys(object).length === 0) {
    return object;
  }

  const newObject: Record<string, unknown> = {};

  for (const _objectKey of Object.keys(object)) {
    if (hasOwnProperty(object, _objectKey)) {
      const objectValue = object[_objectKey];
      const newKeyName = toCamelCase(_objectKey);

      if (isObject(objectValue)) {
        const newValue = convertObjectKeysToCamelCase(objectValue);

        newObject[newKeyName] = newValue;
      } else {
        newObject[newKeyName] = objectValue;
      }
    }
  }

  return newObject;
};
