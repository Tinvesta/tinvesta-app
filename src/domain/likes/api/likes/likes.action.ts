import { AxiosResponse } from 'axios';

import { objectToQueryString } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { ILike } from '@interfaces';

import { IAttributes } from './likes.types';

export const likesAction = async (attributes: IAttributes): Promise<AxiosResponse<ILike[]>> =>
  nextAxiosInstance.get(`${EApiEndpoint.LIKES}${objectToQueryString(attributes)}`);
