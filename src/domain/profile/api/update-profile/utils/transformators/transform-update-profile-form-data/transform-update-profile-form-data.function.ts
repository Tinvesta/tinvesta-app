import isString from 'is-string';
import { objectKeys } from 'ts-object-keys';

import { isArray, isNumber } from '@utils';

import { IEditProfileFormFieldsData } from '../../../../../profile.types';

export const transformUpdateProfileFormData = (
  newData: IEditProfileFormFieldsData,
  oldData: IEditProfileFormFieldsData,
) => {
  const resultObject: Partial<IEditProfileFormFieldsData> = {};

  for (const _key of objectKeys(newData)) {
    const currentNewDataValue = newData[_key];
    const currentOldDataValue = oldData[_key];

    if (
      (isString(currentNewDataValue) || isNumber(currentNewDataValue)) &&
      currentNewDataValue !== currentOldDataValue
    ) {
      // @ts-expect-error
      resultObject[_key] = currentNewDataValue;
    }

    if (
      isArray(currentNewDataValue) &&
      JSON.stringify(currentNewDataValue) !== JSON.stringify(currentOldDataValue)
    ) {
      // @ts-expect-error
      resultObject[_key] = currentNewDataValue;
    }
  }

  return resultObject;
};
