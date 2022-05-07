import { AxiosResponse } from 'axios';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IProfileDetails } from '@interfaces';

export const discoverRecordsAction = async (): Promise<AxiosResponse<IProfileDetails[]>> =>
  nextAxiosInstance.get(EApiEndpoint.DISCOVER_RECORDS);
