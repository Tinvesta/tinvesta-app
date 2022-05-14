import { hasOwnProperty, isObject, objectKeys } from '@utils';

import { toCamelCase } from '../to-camel-case/to-camel-case.function';
import { toSnakeCase } from '../to-snake-case/to-snake-case.function';

const convertObjectKeys =
  (keyTransformFunction: (string: string) => string) => (object: unknown) => {
    if (!isObject(object) || objectKeys(object).length === 0) {
      return object;
    }

    const newObject: Record<string, unknown> = {};

    for (const _objectKey of objectKeys(object)) {
      if (hasOwnProperty(object, _objectKey)) {
        const objectValue = object[_objectKey];

        const newKeyName = keyTransformFunction(_objectKey);

        if (isObject(objectValue)) {
          const newValue = convertObjectKeys(keyTransformFunction)(objectValue);

          newObject[newKeyName] = newValue;
        } else {
          newObject[newKeyName] = objectValue;
        }
      }
    }

    return newObject;
  };

export const convertObjectKeysToCamelCase = convertObjectKeys(toCamelCase);
export const convertObjectKeysToSnakeCase = convertObjectKeys(toSnakeCase);
