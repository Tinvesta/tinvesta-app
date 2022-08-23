import isObject from 'is-object';
import isString from 'is-string';
import toCamelCase from 'to-camel-case';
import { hasOwnProperty } from 'ts-has-own-property';
import { objectKeys } from 'ts-object-keys';

import { isArray } from '../../guards';

const convertObjectKeys =
  (keyTransformFunction: (string: string) => string) => (object: unknown) => {
    if (!isObject(object) || objectKeys(object).length === 0) {
      return object;
    }

    const newObject: Record<string, unknown> = {};

    for (const _objectKey of objectKeys(object)) {
      if (hasOwnProperty(object, _objectKey) && isString(_objectKey)) {
        const objectValue = object[_objectKey];

        const newKeyName = keyTransformFunction(_objectKey);

        if (isObject(objectValue) && !isArray(objectValue)) {
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
