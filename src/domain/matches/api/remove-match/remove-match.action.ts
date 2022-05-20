import { objectToQueryString } from '@utils';

import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IAttributes } from './remove-match.types';

export const removeMatchAction = async (attributes: IAttributes) =>
  nextAxiosInstance.delete(`${EApiEndpoint.REMOVE_MATCH}${objectToQueryString(attributes)}`);
