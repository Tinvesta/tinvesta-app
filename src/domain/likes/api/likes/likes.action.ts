import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IPair } from '@interfaces';

export const likesAction = async (): Promise<AxiosResponse<IPair[]>> =>
  nextAxiosInstance.get(EApiEndpoint.LIKES);
