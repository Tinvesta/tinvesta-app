import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IInputVariables } from './update-profile.types';
import { transformUpdateProfileFormData } from './utils';

export const updateProfileAction = async ({ newData, oldData }: IInputVariables) => {
  const transformedData = transformUpdateProfileFormData(newData, oldData);

  return nextAxiosInstance.post(EApiEndpoint.UPDATE_PROFILE, transformedData);
};
