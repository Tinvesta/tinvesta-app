import { objectToQueryString } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const profileDetailsAction = async (profileId: string) =>
  nextAxiosInstance.get(`${EApiEndpoint.PROFILE_DETAILS}${objectToQueryString({ profileId })}`);
