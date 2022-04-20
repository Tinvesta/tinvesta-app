import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IDiscoverRecord } from '@interfaces';

export const getRecordsAction = async (): Promise<AxiosResponse<IDiscoverRecord[]>> =>
  nextAxiosInstance.get(EApiEndpoint.GET_RECORDS);
