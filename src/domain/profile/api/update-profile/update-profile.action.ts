import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IEditProfileFormFieldsData } from '../../profile.types';

export const updateProfileAction = async (data: IEditProfileFormFieldsData) =>
  nextAxiosInstance.post(EApiEndpoint.UPDATE_PROFILE, data);
