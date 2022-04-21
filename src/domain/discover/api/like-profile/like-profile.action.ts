import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IVariables } from './like-profile.types';

export const likeProfileAction = async ({ profileId, vote }: IVariables) =>
  nextAxiosInstance.post(EApiEndpoint.LIKE_PROFILE, { profileIdToLike: profileId, vote });
