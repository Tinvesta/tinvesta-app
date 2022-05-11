import { AxiosResponse } from 'axios';

import { objectToQueryString } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IProfileDetails } from '@interfaces';

export const PROFILE_DETAILS_ACTION_QUERY_KEY = 'profile_details_action_query_key';

export const profileDetailsAction =
  (profileId: string | null | undefined) => async (): Promise<AxiosResponse<IProfileDetails>> =>
    nextAxiosInstance.get(`${EApiEndpoint.PROFILE_DETAILS}${objectToQueryString({ profileId })}`);
