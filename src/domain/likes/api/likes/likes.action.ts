import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { ILike } from '@interfaces';

export const likesAction = async (): Promise<AxiosResponse<ILike[]>> =>
  nextAxiosInstance.get(EApiEndpoint.LIKES);
