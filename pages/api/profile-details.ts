import * as R from 'ramda';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { hasOwnProperty } from 'ts-has-own-property';

import { convertObjectKeysToCamelCase } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { EApiEndpoint, EApiError, ERoutes } from '@enums';

import { logApiError } from './services/logger';

const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;
const contactEmailFor = [ERoutes.DASHBOARD_MATCHES, ERoutes.DASHBOARD_PROFILE];

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.headers.authorization !== apiRouteSecret) {
    logApiError(
      EApiEndpoint.PROFILE_DETAILS,
      EApiError.UNAUTHORIZED,
      'Invalid api route secret - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  const { user } = await supabaseInstance.auth.api.getUserByCookie(request);

  if (!user) {
    logApiError(
      EApiEndpoint.PROFILE_DETAILS,
      EApiError.UNAUTHORIZED,
      'No user data - request headers',
      request.headers,
    );

    return response.status(401).send(EApiError.UNAUTHORIZED);
  }

  if (!hasOwnProperty(request.query, 'profileId')) {
    logApiError(
      EApiEndpoint.PROFILE_DETAILS,
      EApiError.BAD_REQUEST,
      'No profileId - request query',
      request.query,
    );

    return response.status(400).send(EApiError.BAD_REQUEST);
  }

  const token = cookie.parse(request.headers.cookie || '')['sb:token'];

  supabaseInstance.auth.session = () => ({
    user,
    token_type: '',
    access_token: token,
  });

  const shouldIncludeContactEmail = contactEmailFor.some((_contactEmailFor) =>
    request.headers.referer?.includes(_contactEmailFor),
  );

  const { data: profileDetailsData, error: profileDetailsError } = await supabaseInstance
    .rpc('profile_details', {
      profile_id_input: request.query.profileId,
    })
    .single();

  if (profileDetailsError) {
    logApiError(
      EApiEndpoint.PROFILE_DETAILS,
      EApiError.INTERNAL_SERVER_ERROR,
      'Error',
      profileDetailsError,
    );

    return response.status(500).send(profileDetailsError);
  }

  const parsedProfileDetailsData = convertObjectKeysToCamelCase(profileDetailsData);
  const omittedProfileDetailsData = R.omit(['contactEmail'], parsedProfileDetailsData);

  response.send(shouldIncludeContactEmail ? parsedProfileDetailsData : omittedProfileDetailsData);
};

export default handler;
