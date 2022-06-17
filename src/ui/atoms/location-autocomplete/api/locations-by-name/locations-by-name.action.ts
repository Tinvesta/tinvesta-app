import { AxiosResponse } from 'axios';
import isString from 'is-string';

import { objectToQueryString } from '@utils';

import { mapboxAxiosInstance } from '@infrastructure';

import { IMapboxPlacesApiResponse } from './locations-by-name.types';

const mapboxApiToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;

export const locationsByNameAction = async (
  name: string,
): Promise<AxiosResponse<IMapboxPlacesApiResponse>> => {
  const parsedName = isString(name) ? name.trim() : '';
  const queryString = objectToQueryString({
    access_token: mapboxApiToken,
    types: 'place,locality',
  });

  return mapboxAxiosInstance.get(`/mapbox.places/${parsedName}.json${queryString}`);
};
