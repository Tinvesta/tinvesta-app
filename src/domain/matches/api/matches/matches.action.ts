import { AxiosResponse } from 'axios';

import { objectToQueryString } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IMatch } from '@interfaces';

import { IAttributes } from './matches.types';

export const matchesAction = async (attributes: IAttributes): Promise<AxiosResponse<IMatch[]>> =>
  nextAxiosInstance.get(`${EApiEndpoint.MATCHES}${objectToQueryString(attributes)}`);
