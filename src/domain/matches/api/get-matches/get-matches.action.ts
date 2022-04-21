import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

export const getMatchesAction = async (): Promise<AxiosResponse<{ avatarPublicUrl: string }[]>> =>
  nextAxiosInstance.get(EApiEndpoint.GET_MATCHES);
