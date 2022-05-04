import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IProfileDetails } from '@interfaces';

export const getRecordsAction = async (): Promise<AxiosResponse<IProfileDetails[]>> =>
  nextAxiosInstance.get(EApiEndpoint.GET_RECORDS);
