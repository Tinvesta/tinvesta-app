import { AxiosResponse } from 'axios';

import { isString, objectToQueryString } from '@utils';

import { axiosInstance } from '@infrastructure';

import { IMapboxPlacesApiResponse } from './locations-by-name.types';

const MAPBOX_API_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY;

export const locationsByNameAction = async (
  name: string,
): Promise<AxiosResponse<IMapboxPlacesApiResponse>> => {
  const parsedName = isString(name) ? name.trim() : '';
  const queryString = objectToQueryString({
    access_token: MAPBOX_API_TOKEN,
    types: 'place,locality',
  });

  return axiosInstance.get(`/mapbox.places/${parsedName}.json${queryString}`);
};
