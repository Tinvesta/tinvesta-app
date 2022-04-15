import { objectToQueryString } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const getProfilesAction = async (profileId: string) =>
  nextAxiosInstance.get(`${EApiEndpoint.GET_PROFILE_DETAILS}${objectToQueryString({ profileId })}`);
