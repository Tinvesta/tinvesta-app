import { AxiosResponse } from 'axios';

import { objectToQueryString } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IProfileDetails } from '@interfaces';

import { IAttributes } from './discover-records.types';

export const discoverRecordsAction = async (
  attributes: IAttributes,
): Promise<AxiosResponse<IProfileDetails[]>> =>
  nextAxiosInstance.get(`${EApiEndpoint.DISCOVER_RECORDS}${objectToQueryString(attributes)}`);
