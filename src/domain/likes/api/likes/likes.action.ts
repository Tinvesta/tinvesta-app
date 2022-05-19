import { AxiosResponse } from 'axios';

import { objectToQueryString } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IPair } from '@interfaces';

import { IAttributes } from './likes.types';

export const likesAction = async (attributes: IAttributes): Promise<AxiosResponse<IPair[]>> =>
  nextAxiosInstance.get(`${EApiEndpoint.LIKES}${objectToQueryString(attributes)}`);
