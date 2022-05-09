import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IResponse, IVariables } from './like-profile.types';

export const likeProfileAction = async ({
  profileId,
  vote,
}: IVariables): Promise<AxiosResponse<IResponse>> =>
  nextAxiosInstance.post(EApiEndpoint.LIKE_PROFILE, { profileIdToLike: profileId, vote });
