import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IMatch } from '@interfaces';

export const matchesAction = async (): Promise<AxiosResponse<IMatch[]>> =>
  nextAxiosInstance.get(EApiEndpoint.MATCHES);
