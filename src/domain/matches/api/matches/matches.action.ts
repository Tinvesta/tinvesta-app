import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IPair } from '@interfaces';

export const matchesAction = async (): Promise<AxiosResponse<IPair[]>> =>
  nextAxiosInstance.get(EApiEndpoint.MATCHES);
